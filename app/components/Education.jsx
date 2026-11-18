'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const education = [
  {
    period: '2021 – 2024',
    title: 'Bachelor of Computer Application (BCA)',
    place: 'Gujarati Innovative College, DAVV, Indore',
  },
  {
    period: '2020 – 2021',
    title: 'Higher Secondary (12th)',
    place: 'All Saint H.S. School, Indore',
  },
  {
    period: '2018 – 2019',
    title: 'Secondary (10th)',
    place: 'All Saint H.S. School, Indore',
  },
];

function Education() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="education"
      className="container px-4 mx-auto my-8 md:my-16 md:px-[3rem] lg:px-[12rem]"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        Education
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {education.map((item) => (
          <div
            key={item.title}
            className="flex flex-col bg-[#1e1e2f] border border-[#746FD1] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
          >
            <div className="text-sm text-[#a9a9c1]">{item.period}</div>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">{item.place}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-400">
        <span className="font-semibold text-white">Languages:</span> English, Hindi
      </p>
    </section>
  );
}

export default Education;
