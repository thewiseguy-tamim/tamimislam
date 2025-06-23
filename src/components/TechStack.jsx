import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TechStack = () => {
  const techStack = [
    { name: 'Django', icon: 'django-plain', color: '#092E20' },
    { name: 'React', icon: 'react-original', color: '#61DAFB' },
    { name: 'PostgreSQL', icon: 'postgresql-plain', color: '#336791' },
    { name: 'Python', icon: 'python-plain', color: '#3776AB' },
    { name: 'JavaScript', icon: 'javascript-plain', color: '#F7DF1E' },
    { name: 'Supabase', icon: 'github-original', color: '#3ECF8E' },
    { name: 'C', icon: 'c-plain', color: '#A8B9CC' },
    { name: 'C++', icon: 'cplusplus-plain', color: '#00599C' },
    { name: 'HTML', icon: 'html5-plain', color: '#E34F26' },
    { name: 'CSS', icon: 'css3-plain', color: '#1572B6' },
    { name: 'TailwindCSS', icon: 'tailwindcss-plain', color: '#38B2AC' },
    { name: 'Bootstrap', icon: 'bootstrap-plain', color: '#7952B3' }
  ];

  const { scrollYProgress } = useScroll();
  const gridScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="py-20 px-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white-100 to-gray-100 bg-clip-text text-transparent">
          Tech and Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          style={{ scale: gridScale }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className=" rounded-xl p-6 flex flex-col items-center justify-center hover:bg-[#252525] transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1
                }
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <i 
                className={`devicon-${tech.icon} text-5xl mb-4`}
                style={{ color: tech.color }}
              />
              <span className="text-gray-200 text-lg font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;