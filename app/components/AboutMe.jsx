'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutMe() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="container px-4 mx-auto my-4 md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-8 text-3xl font-semibold md:my-20" data-aos="fade-up">About Me</h1>
      <p className="text-sm text-gray-400 md:text-lg mb-4" data-aos="fade-up">
        Hi, I&apos;m Prem Vishwakarma, a MERN Stack Developer and AI Engineer based in Indore. I build web applications, AI agents, and API integrations, and I work closely with teams to understand requirements, solve problems, and deliver reliable features.
      </p>
      <p className="text-sm text-gray-400 md:text-lg mb-4" data-aos="fade-up">
        With three years of experience at IBR Infotech, I work across the frontend and backend with React, Next.js, Node.js, Express, MongoDB, and PostgreSQL, styled with Tailwind CSS and Bootstrap. I&apos;m comfortable with service-oriented architecture, REST APIs, and third-party integrations, including payment systems like Stripe and PayPal.
      </p>
      <p className="text-sm text-gray-400 md:text-lg mb-4" data-aos="fade-up">
        On the AI side, I build agents and automations with OpenAI, Claude, LangChain, RAG, and MCP servers, along with voice AI platforms like VAPI and RetellAI and workflow tools like n8n and Make.com. Recent work includes an AI voice agent that calls freight carriers to collect rate quotes, and Aiyubot, a no-code platform for building and coordinating AI agents.
      </p>
      <p className="text-sm text-gray-400 md:text-lg mb-4" data-aos="fade-up">
        I ship with AWS, Docker, Git, and GitHub Actions CI/CD pipelines, and use AI coding tools like Claude Code and Codex in my day-to-day work. I&apos;m always learning, and I enjoy turning new technology into features people actually use.
      </p>
    </section>
  );
}

export default AboutMe;
