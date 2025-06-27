'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AdditionalSkills() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const additionalSkills = [
    'Git',
    'Postman',
    'Vercel',
    'CloudPanel',
    'Teamwork',
    'Quick Learning',
    'Engagement',
    'Responsive Layout',
  ];

  return (
    <section
      id="additional-skills"
      className="container px-4 mx-auto my-4  md:my-16 md:px-[3rem] lg:px-[12rem]"
      data-aos="fade-up"
    >
      <h1 className="my-10 text-3xl font-semibold md:my-20">
        Additional Skills
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {additionalSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4">
            {/* Circle */}
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: '#746FD1' }}
            ></div>
            {/* Skill Name */}
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdditionalSkills;
