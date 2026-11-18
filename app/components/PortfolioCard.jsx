'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Shows the project screenshot, or a gradient placeholder for projects without one.
function ProjectImage({ project, className = '' }) {
  return (
    <div className={`relative w-full aspect-[16/9] overflow-hidden ${className}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill={true}
          className="object-cover object-center"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2a2350] via-[#1e1e2f] to-[#4b3a8f] p-6">
          <span className="text-center text-2xl font-bold text-[#A594FD]">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}

function TechStack({ techStack, className = '' }) {
  if (!techStack?.length) return null;
  return (
    <ul className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {techStack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-[#746FD1] px-2 py-0.5 text-xs text-[#c7d1ea]"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function PortfolioCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // -------------------------
  // ⭐ TRUNCATE DESCRIPTION
  // -------------------------
  const maxLength = 100; // change length as needed
  const shortText =
    project.description.length > maxLength
      ? project.description.slice(0, maxLength) + '...'
      : project.description;

  const isTruncated = project.description.length > maxLength;

  return (
    <>
      <div
        className="p-4 border border-gray-600 bg-custom-gradient transform transition-transform duration-300 hover:scale-105 hover:border-[#7C58B9] hover:cursor-pointer rounded-2xl flex flex-col justify-between"
        data-aos="zoom-in-up"
      >
        <div>
          <ProjectImage project={project} className="rounded-lg" />

          <h2 className="mt-5 text-[#c7d1ea] text-xl font-bold text-center">
            {project.title}
          </h2>

          <TechStack techStack={project.techStack} className="mt-3" />

          <p
            className="mt-4 pb-2 text-sm text-center text-gray-400"
            style={{ borderBottom: '1px solid' }}
          >
            {shortText}

            {isTruncated && (
              <span
                className="ml-1 underline cursor-pointer text-blue-400"
                onClick={() => setIsModalOpen(true)}
              >
                See more
              </span>
            )}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {project.livePreview ? (
            <Link
              href={project.livePreview}
              className="btn-grad w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Preview
            </Link>
          ) : (
            <button
              type="button"
              className="btn-grad w-full"
              onClick={() => setIsModalOpen(true)}
            >
              View Details
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a1a] text-gray-200 rounded-xl max-w-2xl w-full px-6 py-10 relative shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-2 right-3 text-gray-400 hover:text-white text-2xl"
              >
                &times;
              </button>

              <ProjectImage project={project} className="rounded-lg mb-4" />

              <h3 className="text-lg font-semibold text-center mb-2">
                {project.title}
              </h3>

              <TechStack techStack={project.techStack} className="mb-4" />

              <p className="text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PortfolioCard;
