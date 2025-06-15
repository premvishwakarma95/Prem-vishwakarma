'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
});

export default function HeroBanner() {
  return (
    <section className="container grid items-center grid-cols-1 px-4 mx-auto my-4 text-white md:my-16 md:px-[3rem] lg:px-[12rem] justify-items-center md:grid-cols-2 md:gap-12">
      <div className="flex flex-col gap-6 md:gap-8 md:justify-self-start">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
          <span className="text-[#A594FD]">Hello, I'm Prem,</span>
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
        <Link href="/" className="w-48 btn-grad">
          Download CV
        </Link>
      </div>

      <div className="h-full w-full">
        <div className="right_main">
          <img className="behind_the_image" src="/photo.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
