import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaChartBar, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A passionate data analyst with expertise in translating complex data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-light p-8 rounded-lg shadow-md"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaUser className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Profile</h3>
            <p className="text-gray-600 text-center">
              Data analyst with experience in SQL, Power BI, and advanced Excel. Skilled in creating insightful visualizations
              and driving data-driven decision-making.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-light p-8 rounded-lg shadow-md"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaChartBar className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Current Role</h3>
            <p className="text-gray-600 text-center">
              Currently working as a Data Analyst at Londe Jewellers Pvt Ltd, creating dashboards, reports, and automating processes
              to improve business efficiency and data accuracy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-light p-8 rounded-lg shadow-md"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <FaGraduationCap className="text-primary-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-center">Education</h3>
            <p className="text-gray-600 text-center">
              MBA in Marketing & Finance from Shri RamdeoBaba College of Engineering and Management.
              B.C.C.A from City Premier College, Nagpur.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-light p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6">Professional Summary</h3>
          <p className="text-gray-600 mb-4">
            Data analyst with strong experience in transforming complex data into actionable business insights. 
            Proficient in SQL, Power BI, Advanced Excel, and data visualization techniques.
          </p>
          <p className="text-gray-600 mb-4">
            Currently working at Londe Jewellers Pvt Ltd where I create comprehensive reports,
            dashboards, and implement process automation to improve business efficiency and data accuracy.
          </p>
          <p className="text-gray-600">
            Previously, I've worked as a Data Analyst Intern at TRON Softech and as Marketing Analyst Intern at JNR Management,
            where I developed skills in data analysis, market research, and strategic thinking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 