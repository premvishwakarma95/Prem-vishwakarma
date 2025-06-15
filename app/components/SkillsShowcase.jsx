'use client';

import { useState } from 'react';
import ProgressCircular from './ProgressCircular';

function SkillsShowcase() {
  const [showAll, setShowAll] = useState(false);
  // Array of skills and their values
  const skills = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 100 },
    { name: 'JavaScript', value: 100 },
    { name: 'Tailwind CSS', value: 100 },
    { name: 'BootStrap CSS', value: 100 },
    { name: 'ReactJS', value: 100 },
    { name: 'NextJS', value: 100 },
    { name: 'NodeJS', value: 100 },
    { name: 'ExpressJS', value: 100 },
    { name: 'MongoDB', value: 100 },
  ];

  const toggleSkillsDisplay = () => {
    setShowAll(!showAll);
  };

  const displayedSkills = showAll ? skills : skills.slice(0, 4);

  return (
    <section
      id="skills"
      className="container px-4 mx-auto my-4  md:my-16 md:px-[3rem] lg:px-[12rem]"
    >
      <h1 className="my-10 text-3xl font-semibold md:my-20">
        My Skills
      </h1>

      {/* Loop through skills array and render ProgressBar component */}
      {/* <div className="hidden grid-cols-2 gap-4 mb-6 lg:grid justify-items-center lg:grid-cols-4 lg:gap-8 ">
        {skills.map((skill, index) => (
          <ProgressCircular
            key={index}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </div> */}
      <div className='flex justify-start flex-wrap gap-20'>
        {skills.map((skill, index) =>
          <div className='skill-box' key={index}>
            <h6 className='text text-xl text-[#d9f4f8] font-medium'>{skill.name}</h6>
          </div>
        )
        }
      </div>

      {/* <div className="grid grid-cols-2 gap-4 mb-6 lg:hidden justify-items-center lg:grid-cols-4 lg:gap-8 ">
        {displayedSkills.map((skill, index) => (
          <ProgressCircular
            key={index}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </div> */}

      <div className={`flex justify-center mt-4 lg:hidden`}>
        <button className="btn-grad" onClick={toggleSkillsDisplay}>
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </section>
  );
}

export default SkillsShowcase;
