'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function PortfolioCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const shortText =
    'Measure Your Brain Health with a Cognitive Assessment Test Today! Take our brain specialist-inspired memory assessment';

  return (
    <>
      <div className="p-4 border border-gray-600 bg-custom-gradient transform transition-transform duration-300 hover:scale-105 hover:border-[#7C58B9] hover:cursor-pointer rounded-2xl flex flex-col justify-between" data-aos="zoom-in-up">
        <div>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill={true}
              className="object-cover object-center"
            />
          </div>

          <h2 className="mt-5 text-[#c7d1ea] text-xl font-bold text-center">
            {project.title}
          </h2>

          <p className="mt-4 pb-2 text-sm text-center text-gray-400" style={{ borderBottom: '1px solid' }}>
            {shortText}
            <span
              className="ml-1 underline cursor-pointer text-blue-400"
              onClick={() => setIsModalOpen(true)}
            >
              See more
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Link
            href={project.livePreview}
            className="btn-grad w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </Link>

          {/* <Link href={project.githubLink} className="btn-grad">
            Check on GitHub
          </Link> */}
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

              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill={true}
                  className="object-cover object-center"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{project.title}</h3>
              <p className="text-sm leading-relaxed text-gray-300">{project.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PortfolioCard;
