'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

export default function HeroBanner() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="container grid items-center grid-cols-1 px-4 mx-auto my-4 text-white md:my-16 md:px-[3rem] lg:px-[12rem] justify-items-center md:grid-cols-2 md:gap-12">
      <div data-aos="fade-up" className="flex flex-col gap-6 md:gap-8 md:justify-self-start">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
          <span className="text-[#A594FD]">Hello, I&apos;m Prem,</span>
        </h1>
        <h1 className="text-3xl font-bold md:text-2xl lg:text-4xl">
          <Typewriter
            options={{
              strings: ['Full Stack Developer', 'Problem Solver', 'MERN Stack Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-sm text-gray-400 md:text-lg">
          Passionate about crafting responsive and dynamic user interfaces. I turn complex problems into elegant digital solutions.
        </p>
        <a
          href="/Prem%20Vishwakarma.pdf"
          download
          className="w-48 btn-grad text-center block"
        >
          Download CV
        </a>
      </div>

      <div data-aos="fade-up" className="h-full w-full mt-32 md:mt-0">
        <div className="right_main">
          <img className="behind_the_image" src="/photo.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
