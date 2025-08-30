import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, ExternalLink, Github } from 'lucide-react';
import Project1 from '../assets/project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/project3.png'; // Replace with your PetNest image import

// Mock DecryptedText component
const DecryptedText = ({ text, animateOn, revealDirection }) => {
  return <span>{text}</span>;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = {
    petnest: {
      id: 3,
      title: "PetNest",
      image: Project3, // Replace with your PetNest image import
      shortDescription: "A full-stack pet marketplace platform for browsing, posting, and adopting/buying pets with secure payments and in-app messaging.",
      fullDescription: "PetNest is a comprehensive web application designed to connect pet adopters, sellers, and animal lovers in one trusted platform. Users can browse pets with advanced filters, create and manage listings, communicate via a built-in messaging system, and complete secure online payments through SSLCommerz.\n\nThe platform includes user verification to ensure trust and safety, along with role-based dashboards for users, moderators, and admins to manage listings, verifications, and platform activity. PetNest delivers a responsive, mobile-friendly experience optimized for all devices.\n\nBuilt with a modern tech stack, PetNest offers a seamless, secure, and user-friendly interface for anyone looking to adopt or buy pets online.",
      date: "August 2025",
      category: "Full-Stack Web Application",
      status: "Live",
      technologies: ['React', 'Tailwind CSS', 'Vite', 'Django REST Framework', 'PostgreSQL', 'JWT Authentication', 'Cloudinary', 'SSLCommerz'],
      liveUrl: "https://petnest-eta.vercel.app/",
      githubUrl: "https://github.com/thewiseguy-tamim/petnest-frontend", // Or backend repo if needed
      features: [
        'Browse pets using advanced filters (type, breed, adoption/sale status)',
        'Create listings with image uploads and manage them via a personal dashboard',
        'Communicate directly with other users via a built-in messaging system',
        'Complete secure online payments with SSLCommerz integration',
        'Build trust with user verification and role-based moderation'
      ]
    },
    homesnap: {
      id: 1,
      title: "HomeSnap",
      image: Project1,
      shortDescription: "A comprehensive household services platform connecting users with trusted professionals for tasks like cleaning, gardening, carpentry, and more—all from the comfort of home.",
      fullDescription: "HomeSnap is a cutting-edge household services platform that revolutionizes how people connect with trusted professionals for home maintenance and improvement tasks. Built with modern web technologies, it provides a seamless experience for booking everything from routine cleaning to complex repairs.\n\nThe platform features an intuitive booking system that allows users to schedule services with ease, while service providers can manage their availability and track their earnings. With real-time notifications, secure payment processing, and a comprehensive review system, HomeSnap ensures quality service delivery and customer satisfaction.\n\nThe responsive design works flawlessly across all devices, making it easy for users to book services on-the-go or manage their household needs from their desktop.",
      date: "March 2024",
      category: "Full-Stack Web Application",
      status: "Live",
      technologies: ['Django', 'Tailwind CSS', 'Rest API', 'React', 'Supabase', 'Djoser'],
      liveUrl: "https://home-snapx.vercel.app/",
      githubUrl: "https://github.com/thewiseguy-tamim/HomeSnapx",
      features: [
        'Book home services with ease, including cleaning, repairs, and landscaping',
        'Secure user login & service provider management with Djoser and Supabase',
        'Schedule appointments and track service status in real time',
        'Get a snapshot of all active bookings and completed jobs through a modern dashboard'
      ]
    },
    eventpro: {
      id: 2,
      title: "Eventpro",
      image: Project2,
      shortDescription: "An all-in-one event management platform built to help users plan, organize, and manage events of any scale with ease.",
      fullDescription: "EventPro is a comprehensive event management solution designed to streamline the planning, organization, and execution of events of any scale. From intimate gatherings to large corporate conferences, EventPro provides the tools needed to ensure successful events.\n\nThe platform offers robust features including guest management, vendor coordination, budget tracking, and real-time analytics. Event organizers can create detailed timelines, manage RSVPs, and coordinate with team members through integrated communication tools.\n\nWith its intuitive dashboard, users can monitor event progress, track attendance, and generate detailed reports. The platform's scalable architecture ensures smooth performance whether you're planning a small workshop or a major conference with thousands of attendees.",
      date: "January 2024",
      category: "Event Management System",
      status: "Live",
      technologies: ['Django', 'Tailwind CSS', 'MVT', 'Python'],
      liveUrl: "https://event-three-inky.vercel.app/",
      githubUrl: "https://github.com/thewiseguy-tamim/eventpro",
      features: [
        'Create and manage events with detailed scheduling and guest tracking',
        'Secure authentication and role-based access',
        'Monitor upcoming and past events through intuitive dashboards'
      ]
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-2 py-8 bg-transparent min-h-screen mt-[-140px]">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white"
      >
        <DecryptedText text="Featured Projects" animateOn="view" revealDirection="center" />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-300/40 my-4 mb-12 sm:mb-20 w-full max-w-5xl mx-auto"
      />

      {/* PetNest Project (placed first) */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[16/9]">
            <img
              src={Project3}
              alt="PetNest Screenshot"
              className="absolute inset-0 w-full h-full object-cover"
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
            <a href={projectsData.petnest.liveUrl} target="_blank" rel="noopener noreferrer">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">PetNest</span>
            </a>
          </div>

          <p className="text-gray-300 mb-6">
            {projectsData.petnest.shortDescription}
          </p>

          <ul className="space-y-3 mb-8">
            {projectsData.petnest.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            {projectsData.petnest.technologies.map((tech) => (
              <button
                key={tech}
                className="px-4 py-2 rounded-md border border-gray-600 text-sm text-gray-300 hover:bg-white/5 transition-colors"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href={projectsData.petnest.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-white text-black border hover: transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                Live Demo
              </span>
            </a>

            <a
              href={projectsData.petnest.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-transparent text-white border border-[#363636] hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                View Code
              </span>
            </a>

            <button
              onClick={() => openModal(projectsData.petnest)}
              className="group px-6 py-2 rounded-md bg-white text-black border hover: transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                View Details
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* HomeSnap Project */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[16/9]">
            <img
              src={Project1}
              alt="HomeSnap Screenshot"
              className="absolute inset-0 w-full h-full object-cover"
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
            <a href="https://home-snapx.vercel.app/" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">HomeSnap</span>
            </a>
          </div>

          <p className="text-gray-300 mb-6">
            {projectsData.homesnap.shortDescription}
          </p>

          <ul className="space-y-3 mb-8">
            {projectsData.homesnap.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            {projectsData.homesnap.technologies.map((tech) => (
              <button
                key={tech}
                className="px-4 py-2 rounded-md border border-gray-600 text-sm text-gray-300 hover:bg-white/5 transition-colors"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://home-snapx.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-white text-black border hover: transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                Live Demo
              </span>
            </a>

            <a
              href="https://github.com/thewiseguy-tamim/HomeSnapx"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-transparent text-white border border-[#363636] hover:bg:white/5 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                View Code
              </span>
            </a>

            <button
              onClick={() => openModal(projectsData.homesnap)}
              className="group px-6 py-2 rounded-md bg-white text-black border hover: transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                View Details
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* EventPro Project */}
      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 items-start mt-16 lg:mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[16/10] md:aspect-[16/9]">
            <img
              src={Project2}
              alt="EventPro Screenshot"
              className="absolute inset-0 w-full h-full object-cover"
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
            <a href="https://eventpro-4059.onrender.com/" target="_blank" rel="noopener noreferrer">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">Eventpro</span>
            </a>
          </div>

          <p className="text-gray-300 mb-6 text-lg font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
            {projectsData.eventpro.shortDescription}
          </p>

          <ul className="space-y-3 mb-8">
            {projectsData.eventpro.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mb-8">
            {projectsData.eventpro.technologies.map((tech) => (
              <button
                key={tech}
                className="px-4 py-2 rounded-md border border-gray-600 text-sm text-gray-300 hover:bg-white/5 transition-colors"
              >
                {tech}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-4">
            <a
              href="https://eventpro-4059.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-white text-black border hover: transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                Live Demo
              </span>
            </a>

            <a
              href="https://github.com/thewiseguy-tamim/eventpro"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-2 rounded-md bg-transparent text-white border border-[#363636] hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                View Code
              </span>
            </a>

            <button
              onClick={() => openModal(projectsData.eventpro)}
              className="group px-6 py-2 rounded-md bg-white text-black border hover: transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="group-hover:translate-x-1 transition-transform duration-300 font-bold">
                View Details
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              className="bg-transparent shadow-2xl w-full h-full overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-transparent">
                <div className="flex items-center gap-3">
                  <button
                    onClick={closeModal}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 flex items-center gap-2 text-gray-200 hover:text-white"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-medium">Back</span>
                  </button>
                </div>

                <div className="flex gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto h-[calc(100%-72px)] sm:h-[calc(100%-80px)]">
                <div className="p-6 sm:p-8 lg:p-12 max-w-6xl mx-auto">
                  {/* Project Image */}
                  <div className="mb-8 sm:mb-10">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/9]">
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
                    {selectedProject.title}
                  </h2>

                  {/* Project Metadata */}
                  <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 lg:mb-10 text-sm sm:text-base text-gray-300">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span>{selectedProject.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Tag className="w-5 h-5" />
                      <span>{selectedProject.category}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Status: {selectedProject.status}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="mb-8 lg:mb-10">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                      About This Project
                    </h3>
                    <div className="text-gray-300 leading-relaxed space-y-4 sm:space-y-6 text-base sm:text-lg lg:text-xl">
                      {selectedProject.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 lg:mb-10">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                      Key Features
                    </h3>
                    <ul className="space-y-3 sm:space-y-4">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 sm:gap-4">
                          <span className="text-blue-500 text-xl sm:text-2xl">•</span>
                          <span className="text-gray-300 text-base sm:text-lg lg:text-xl">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 lg:mb-8">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 text-gray-200 rounded-full text-sm sm:text-base border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;