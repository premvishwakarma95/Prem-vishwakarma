'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function WorkExperience() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const experiencePoints = [
    {
      date: 'April 2023',
      title: 'Joined IBR INFOTECH',
      description:
        'Started as a MERN Stack Developer, focusing on building web apps with React.js, Node.js, and MongoDB.',
    },
    {
      date: 'Mid 2023',
      title: 'Took Full-Stack Ownership',
      description:
        'Handled entire features independently, implemented REST APIs, authentication, and integrated third-party services.',
    },
    {
      date: '2024 – Present',
      title: 'Leading Key Projects',
      description:
        'Managing complex projects, improving performance, deploying on cloud, and mentoring junior developers.',
    },
  ];

  return (
    <section
      id="experience"
      className="container px-4 mx-auto my-8 md:my-16 md:px-[3rem] lg:px-[12rem]"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        Work Experience
      </h2>

      {/* All cards including current position */}
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-stretch">
        {experiencePoints.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between flex-1 bg-[#1e1e2f] border border-[#746FD1] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
            data-aos="fade-up"
          >
            <div>
              <div className="text-sm text-[#a9a9c1]">{item.date}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Current Position Card */}
        <div className="flex flex-col justify-between flex-1 bg-[#1e1e2f] border border-[#746FD1] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300" data-aos="fade-up">
          <div>
            {/* <div className="text-sm text-[#a9a9c1]">2023 – Present</div> */}
            <h3 className="mt-2 text-lg font-semibold text-white">
              Current Position
            </h3>
            <div className="mt-4 space-y-3 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-white">Company:</span>{' '}
                IBR INFOTECH
              </p>
              <p>
                <span className="font-semibold text-white">Role:</span>{' '}
                MERN Stack Developer
              </p>
              <p>
                <span className="font-semibold text-white">Duration:</span>{' '}
                April 2023 – Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
