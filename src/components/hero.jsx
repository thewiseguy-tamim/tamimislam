// Hero.jsx
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';
import resumePDF from '../assets/cv.pdf';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaChevronDown } from 'react-icons/fa';
import ShinyText from '../../reactbits/ShinyText/ShinyText';
import DecryptedText from '../../reactbits/DecryptedText/DecryptedText';
import ProfileCard from '../../reactbits/ProfileCard/ProfileCard';

const Hero = () => {
  const codingPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <pattern id="coding" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <rect width="40" height="40" fill="none"/>
        <path d="M10 15l5 5-5 5M30 15l-5 5 5 5M17 30l6-20" stroke="rgba(255,255,255,0.07)" stroke-width="1.5" fill="none"/>
      </pattern>
      <rect x="0" y="0" width="100" height="100" fill="url(#coding)"/>
    </svg>
  `)}`;

  const socials = [
    {
      icon: <FaGithub size={28} />,
      link: "https://github.com/thewiseguy-tamim",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/nottamimislam/",
      label: "LinkedIn"
    },
    {
      icon: <FaInstagram size={28} />,
      link: "https://www.instagram.com/tamim_accidentally_/",
      label: "Instagram"
    },
    {
      icon: <FaFacebook size={28} />,
      link: "https://www.facebook.com/tamim.akuma/",
      label: "Facebook"
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Tamim_Islam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = projectsSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 mt-[-70px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Greeting Badge */}
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white inline-block">
              Hello, I am
            </span>

            {/* Name & Title */}
            <div className="space-y-3">
              <h1 className="text-5xl font-bold text-gray-100">
                <ShinyText text="Tamim Islam" disabled={false} speed={3} className='custom-class' />
              </h1>
              
              <h2 className="text-3xl font-bold text-gray-300">
                <DecryptedText
                    text="Full Stack Development Engineer"
                    animateOn="view"
                    revealDirection="center"
                />
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-lg">
              Passionate about creating elegant solutions to complex problems. 
              Specializing in modern web technologies and cloud architecture.
            </p>

            {/* Tech Stack */}
            <div className="flex gap-3 flex-wrap">
              {['React', 'Vite', 'Javascript', 'Django', 'SQL', 'Supabase'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-gray-700 rounded-full text-gray-300 
                           hover:border-gray-500 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-white text-black font-bold rounded-lg 
                         hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
              >
                Download Resume
              </button>
              <button 
                onClick={handleProjectsClick}
                className="px-6 py-3 border border-white text-white font-bold rounded-lg 
                          hover:bg-white/10 transition-colors duration-300"
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Right Column - ProfileCard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-sm mx-auto lg:mr-0"
          >
            <ProfileCard 
                name=""
                title=""
                handle="tamim_accidentally_"
                status="Online"
                contactText="Contact Me"
                avatarUrl={profileImg}
                showUserInfo={true}
                enableTilt={true}
                innerGradient="none"
                iconUrl={codingPattern}
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Arrow */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;