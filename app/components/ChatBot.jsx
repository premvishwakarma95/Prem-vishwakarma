'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, Send, X } from 'lucide-react';

const GREETING = {
  role: 'assistant',
  content:
    "Hi! I'm Prem's assistant. Ask me about Prem's skills, projects, experience, or how to get in touch.",
};

const SUGGESTIONS = [
  'What does Prem do?',
  'What AI projects has Prem built?',
  "What's Prem's tech stack?",
  'How can I contact Prem?',
];

// Renders **bold**, and turns URLs and emails in a reply into clickable links.
function linkify(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]*[^\s).,;:!?]|[\w.+-]+@[\w-]+\.[\w.]+)/g);
  return parts.map((part, i) => {
    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return (
        <strong key={i} className="font-semibold text-white">
          {linkify(part.slice(2, -2))}
        </strong>
      );
    }
    if (/^https?:\/\//.test(part)) {
      return (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline text-[#12d8fa] break-all">
          {part}
        </a>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className="underline text-[#12d8fa] break-all">
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = async (text) => {
    const content = text.trim();
    if (!content || isLoading) return;

    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // The greeting is UI-only, so it isn't sent to the model.
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = res.ok
        ? data.reply
        : data.error || 'Sorry, something went wrong. Please try again.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply, isError: !res.ok }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Network error. Please check your connection and try again.', isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const showSuggestions = messages.length === 1 && !isLoading;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] h-[70vh] max-h-[560px] flex flex-col bg-[#141a2e] border border-[#746FD1] rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Chat with Prem's assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#1e1e2f] border-b border-[#746FD1]/40">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#1fa2ff] to-[#7C58B9]">
                <Bot size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Ask about Prem</p>
                <p className="text-xs text-gray-400">AI assistant · answers from Prem&apos;s resume</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-[#1fa2ff] to-[#12d8fa] text-[#0F1724] rounded-br-sm'
                        : m.isError
                        ? 'bg-red-500/10 border border-red-400/40 text-red-200 rounded-bl-sm'
                        : 'bg-[#1e1e2f] border border-[#746FD1]/40 text-gray-200 rounded-bl-sm'
                    }`}
                  >
                    {m.role === 'assistant' ? linkify(m.content) : m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div className="flex gap-1 px-4 py-3 rounded-2xl rounded-bl-sm bg-[#1e1e2f] border border-[#746FD1]/40">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="w-2 h-2 rounded-full bg-[#A594FD] animate-bounce"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {showSuggestions && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-[#746FD1] text-[#c7d1ea] hover:bg-[#746FD1]/20 transition"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 p-3 border-t border-[#746FD1]/40 bg-[#1e1e2f]">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={1000}
                placeholder="Ask about skills, projects..."
                className="flex-1 bg-[#0F1724] border border-gray-600 focus:border-[#A594FD] outline-none rounded-full px-4 py-2 text-sm text-white placeholder-gray-500"
                aria-label="Your message"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#1fa2ff] to-[#12d8fa] text-[#0F1724] disabled:opacity-40 transition"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="fixed z-50 bottom-6 right-4 sm:right-6 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#1fa2ff] to-[#7C58B9] shadow-lg shadow-[#7C58B9]/40 hover:scale-110 transition-transform"
        aria-label={isOpen ? 'Close chat' : 'Chat with Prem’s assistant'}
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>
    </>
  );
}
