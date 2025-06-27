'use client';

import { useEffect, useRef } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const icons = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
];

export default function SkillsCarousel() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const setupClone = (ref) => {
      const list = ref.current;
      const container = list?.parentNode;

      if (list && container && !container.dataset.cloned) {
        const clone = list.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        clone.classList.add('clone');
        container.appendChild(clone);
        container.dataset.cloned = 'true';
      }
    };

    setupClone(topRef);
    setupClone(bottomRef);
  }, []);

  return (
    <div className="relative font-inter antialiased" data-aos="fade-up">
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-6xl mx-auto px-4 py-16 space-y-12" id='skills'>
        <h1 className="text-3xl font-semibold mb-20">
          My Skills
        </h1>
        <div className="relative flex overflow-hidden w-full h-20">
          <ul
            ref={topRef}
            className="flex animate-scroll-left items-center [&_li]:mx-8 [&_svg]:text-[#d9f4f8] [&_svg]:w-12 [&_svg]:h-12"
          >
            {icons.map((Icon, index) => (
              <li key={`top-${index}`}>
                <Icon />
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom carousel (Right to Left) */}
        <div className="relative flex overflow-hidden w-full h-20">
          <ul
            ref={bottomRef}
            className="flex animate-scroll-right items-center [&_li]:mx-8 [&_svg]:text-[#d9f4f8] [&_svg]:w-12 [&_svg]:h-12"
          >
            {icons.map((Icon, index) => (
              <li key={`bottom-${index}`}>
                <Icon />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
