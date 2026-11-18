import { NextResponse } from 'next/server';
import { systemPrompt } from '../../utils/profile';

// Any OpenAI-compatible chat endpoint works. Defaults to Groq's free tier.
const LLM_BASE_URL = process.env.LLM_BASE_URL || 'https://api.groq.com/openai/v1';
const LLM_MODEL = process.env.LLM_MODEL || 'openai/gpt-oss-120b';
// Comma-separated models to try when the main one is rate-limited. Set to "" to disable.
const LLM_FALLBACK_MODELS = (process.env.LLM_FALLBACK_MODELS ?? 'openai/gpt-oss-20b')
  .split(',')
  .map((m) => m.trim())
  .filter(Boolean);
const LLM_MODELS = [LLM_MODEL, ...LLM_FALLBACK_MODELS.filter((m) => m !== LLM_MODEL)];
const LLM_API_KEY = process.env.LLM_API_KEY;

function callModel(model, messages) {
  return fetch(`${LLM_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LLM_API_KEY}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      temperature: 0.3,
      max_tokens: 800,
      // gpt-oss models "think" before answering; keep it short to save free-tier tokens.
      ...(model.includes('gpt-oss') ? { reasoning_effort: 'low' } : {}),
    }),
    signal: AbortSignal.timeout(20000),
  });
}

const MAX_HISTORY = 10; // messages sent to the model
const MAX_MESSAGE_CHARS = 1000;
const RATE_LIMIT = 20; // requests per IP per window
const RATE_WINDOW_MS = 10 * 60 * 1000;

// Best-effort, per-instance rate limit to protect the free-tier quota.
const hits = new Map();
function isRateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT;
}

function cleanMessages(messages) {
  if (!Array.isArray(messages)) return null;
  const cleaned = messages
    .filter(
      (m) =>
        m &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim()
    )
    .slice(-MAX_HISTORY)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));
  if (!cleaned.length || cleaned[cleaned.length - 1].role !== 'user') return null;
  return cleaned;
}

export async function POST(request) {
  if (!LLM_API_KEY) {
    console.error('Chatbot: LLM_API_KEY is not set');
    return NextResponse.json(
      { error: 'The chatbot is not configured yet. Please email premvishwakarma088@gmail.com.' },
      { status: 503 }
    );
  }

  const ip =
    request.headers.get('x-nf-client-connection-ip') || // Netlify
    request.headers.get('x-real-ip') || // Vercel
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'You are sending messages too quickly. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const messages = cleanMessages(body?.messages);
  if (!messages) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  try {
    // Try the main model first; if its free-tier quota is used up (429),
    // fall back to the next model, which has its own separate quota.
    let res;
    for (const model of LLM_MODELS) {
      res = await callModel(model, messages);
      if (res.status !== 429) break;
      console.warn(`Chatbot: ${model} rate-limited, trying next model`);
    }

    if (!res.ok) {
      console.error('Chatbot: LLM error', res.status, await res.text());
      const busy = res.status === 429;
      return NextResponse.json(
        {
          error: busy
            ? 'The assistant is busy right now. Please try again in a minute.'
            : 'Sorry, something went wrong. Please try again.',
        },
        { status: busy ? 429 : 502 }
      );
    }

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json({ error: 'Sorry, I could not answer that.' }, { status: 502 });
    }
    return NextResponse.json({ reply });
  } catch (err) {
    console.error('Chatbot: request failed', err);
    return NextResponse.json(
      { error: 'Sorry, something went wrong. Please try again.' },
      { status: 502 }
    );
  }
}
