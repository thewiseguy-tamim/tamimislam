import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="Education" className="w-full mt-[-20px]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Pursuing a degree in Computer Science and Engineering with a focus on innovative technologies
          </p>
        </motion.div>

        {/* Education Card */}
        <div className="w-full mx-auto">
          <motion.div 
            className="bg-transparent rounded-2xl shadow-2xl border border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-3xl hover:border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            {/* Card Header */}
            <div className="bg-transparent px-6 py-8 text-white border-b border-gray-800">
              <motion.div 
                className="flex items-center justify-between flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 p-3 rounded-full">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Bangladesh University of Business and Technology
                    </h3>
                    <p className="text-gray-300 text-base md:text-lg">BUBT</p>
                  </div>
                </div>
                {/* CGPA Highlight */}
                {/* <div className="bg-gray-700 px-4 py-2 rounded-full border border-gray-600">
                  <div className="flex items-center space-x-2">
                    <Award className="w-6 h-6 text-white" />
                    <span className="font-bold text-xl text-white">CGPA: 3.72</span>
                  </div>
                </div> */}
              </motion.div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 bg-transparent">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Program Details */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                      <BookOpen className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-white mb-1">Program</h4>
                      <p className="text-gray-300 text-lg">
                        Bachelor of Science in Computer Science and Engineering (CSE)
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                      <Calendar className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-white mb-1">Start Date</h4>
                      <p className="text-gray-300 text-lg">January 1, 2024</p>
                    </div>
                  </motion.div>
                </div>

                {/* Academic Progress */}
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                      <GraduationCap className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-white mb-1">Current Status</h4>
                      <p className="text-gray-300 text-lg">3rd Semester, 2nd Year</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-800 p-2 rounded-lg border border-gray-700">
                      <Award className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-xl text-white mb-1">Academic Performance</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-300 text-lg">Current CGPA:</span>
                        <span className="bg-white text-black px-3 py-1 rounded-full text-base font-bold">
                          3.39
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Additional Info */}
              <motion.div 
                className="mt-8 p-4 bg-transparent rounded-lg border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-xl text-white mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-base border border-gray-600">
                    Software Engineering
                  </span>
                  <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-base border border-gray-600">
                    Web Development
                  </span>
                  <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-base border border-gray-600">
                    Data Structures
                  </span>
                  <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-base border border-gray-600">
                    Algorithms
                  </span>
                </div>
              </motion.div>

              {/* Progress Bar */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base font-medium text-gray-300">Academic Progress</span>
                  <span className="text-base text-gray-400">3rd Semester</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2 border border-gray-700">
                  <div 
                    className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-300" 
                    style={{width: '37.5%'}}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">Completed 3 out of 8 semesters</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Future Education Placeholder Comment */}
        {/* 
          Future Education Entries:
          Additional education details, certifications, or courses can be added here
          following the same card structure pattern
        */}
      </div>
    </section>
  );
};

export default Education;