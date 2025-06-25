function WorkExperience() {
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
    <section id="experience" className="container px-4 mx-auto my-8  md:my-16 md:px-[3rem] lg:px-[12rem]">
      <h2 className="text-3xl font-bold text-center text-white mb-16">
        Work Experience
      </h2>

      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-stretch">
        {experiencePoints.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between flex-1 bg-[#1e1e2f] border border-[#746FD1] rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
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
      </div>

      <div className="mt-16 flex justify-center px-4">
        <div className="bg-[#1e1e2f] border border-[#746FD1] rounded-2xl px-10 py-8 shadow-lg w-full max-w-xl backdrop-blur-md">
          <h4 className="text-2xl font-bold text-white text-center mb-6">
            Current Position
          </h4>

          <div className="space-y-4 text-gray-300 text-base">
            <div className="grid grid-cols-[120px_auto] gap-x-4">
              <span className="font-semibold text-white">Company:</span>
              <span>IBR INFOTECH</span>
            </div>
            <div className="grid grid-cols-[120px_auto] gap-x-4">
              <span className="font-semibold text-white">Role:</span>
              <span>MERN Stack Developer</span>
            </div>
            <div className="grid grid-cols-[120px_auto] gap-x-4">
              <span className="font-semibold text-white">Duration:</span>
              <span>April 2023 – Present</span>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}

export default WorkExperience;
