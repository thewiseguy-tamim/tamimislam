import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from '../../reactbits/DecryptedText/DecryptedText';

const Projects = () => {
  return (
    <div className="container mx-auto px-4 mb-2 py-8" > 
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} 
        className="text-5xl font-bold text-center text-white"
      >
        <DecryptedText
          text="Featured Projects"
          animateOn="view"
          revealDirection="center"
        />
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} 
        className="border-t border-gray-300 my-4 mb-20 w-[42rem] mx-auto md:w-[30rem] sm:w-full" 
      />

      <div className="flex flex-col md:flex-row gap-10 items-start"> {/* Reduced gap-25 to gap-10 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="w-full md:w-1/2"
        >
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/src/assets/project1.png" 
              alt="Project Screenshot" 
              className="w-full h-[300px] md:h-[400px] object-cover mt-3 rounded-3xl" 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="w-full md:w-1/2 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <a href="https://home-snapx.vercel.app/"><span className="text-4xl font-bold">HomeSnap</span></a>
          </div>

          <p className="text-gray-300 mb-6">
            A comprehensive household services platform connecting users with trusted professionals for tasks like cleaning, gardening, carpentry, and more—all from the comfort of home.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Book home services with ease, including cleaning, repairs, and landscaping',
              'Secure user login & service provider management with Djoser and Supabase',
              'Schedule appointments and track service status in real time',
              'Get a snapshot of all active bookings and completed jobs through a modern dashboard'
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Django', 'Tailwind CSS', 'Rest API', 'React', 'Supabase', 'Djoser'].map((tech) => (
              <button
                key={tech}
                className="px-4 py-2 rounded-md border border-gray-600 text-sm text-gray-300 
                         hover:bg-gray-800 transition-colors"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://home-snapx.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-white text-black border  
                       hover: transition-all duration-300 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                Live Demo
              </span>
            </a>

            <a
              href="https://github.com/thewiseguy-tamim/HomeSnapx"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-black text-white border border-[#363636] 
                       hover:bg-[#2a2a2a] transition-all duration-300 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                View Code
              </span>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start mt-20"> {/* Reduced gap-20 to gap-10 */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="w-full md:w-1/2"
        >
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/src/assets/Project2.png" 
              alt="Project Screenshot" 
              className="w-full h-[300px] md:h-[420px] object-cover rounded-3xl" 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }} 
          className="w-full md:w-1/2 text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-4xl font-bold">Eventpro</span>
          </div>

          <p className="text-gray-300 mb-6 text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
            An all-in-one event management platform built to help users plan, organize, and manage events of any scale with ease.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Create and manage events with detailed scheduling and guest tracking',
              'Secure authentication and role-based access',
              'Monitor upcoming and past events through intuitive dashboards'
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            {['Django', 'Tailwind CSS', 'MVT', 'Python'].map((tech) => (
              <button
                key={tech}
                className="px-4 py-2 rounded-md border border-gray-600 text-sm text-gray-300 
                         hover:bg-gray-800 transition-colors"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="https://eventpro-4059.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-white text-black border  
                       hover: transition-all duration-300 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="w-4 h-4"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                Live Demo
              </span>
            </a>

            <a
              href="https://github.com/thewiseguy-tamim/eventpro"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-black text-white border border-[#363636] 
                       hover:bg-[#2a2a2a] transition-all duration-300 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                View Code
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;