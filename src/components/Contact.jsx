import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Debug: Log isInView to check if the hook triggers
  useEffect(() => {
    console.log('isInView:', isInView);
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    
    <motion.section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      // Fallback style to ensure visibility if animation fails
      style={{ minHeight: '100vh' }}
    >
      <div className="text-center max-w-2xl w-full">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
          variants={itemVariants}
        >
          Let's work together
        </motion.h1>
        <motion.p
          className="font-sans text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
          variants={itemVariants}
        >
          If you have a project you would like assistance with, reach out and let's get to work
        </motion.p>
        <motion.a
          href="mailto:nottamimislam@gmail.com"
          className="font-sans text-3xl text-white  border-white pb-1 inline-block
                     hover:text-gray-300 hover:border-gray-300 transition-all duration-300"
          style={{ fontFamily: "'Playfair Display', sans-serif" }}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          nottamimislam@gmail.com
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;