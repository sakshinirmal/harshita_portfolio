import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserTie, FaAward } from 'react-icons/fa';

const Education = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const education = [
    {
      degree: 'MBA in Marketing & Finance',
      institution: 'Shri RamdeoBaba College of Engineering and Management, Nagpur',
      year: '2021 - 2023',
      grade: '78%',
      icon: <FaGraduationCap size={24} />,
      color: 'primary',
    },
    {
      degree: 'B.C.C.A',
      institution: 'City Premier College, Nagpur',
      year: '2017 - 2020',
      grade: '72.7%',
      icon: <FaGraduationCap size={24} />,
      color: 'secondary',
    },
  ];

  const positions = [
    {
      title: 'Team Leader',
      organization: 'Londe Jewellers Pvt Ltd',
      description: 'Led team operations and coordinated cross-functional initiatives.',
      icon: <FaUserTie size={24} />,
      color: 'primary',
    },
    {
      title: 'Project Lead',
      organization: 'Dabur India Ltd.',
      description: 'Led a Live Project, analyzing consumer behaviour, boosting brand awareness, and significantly enhancing consumer perception.',
      icon: <FaAward size={24} />,
      color: 'secondary',
    },
  ];

  const EducationCard = ({ education, index }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className={`flex relative p-6 border-l-4 ml-6 mb-8 bg-white rounded-lg shadow-md ${
          education.color === 'primary' 
            ? 'border-primary-500' 
            : 'border-secondary-500'
        }`}
      >
        <div 
          className={`absolute -left-8 top-6 w-14 h-14 rounded-full flex items-center justify-center ${
            education.color === 'primary' 
              ? 'bg-primary-500 text-white' 
              : 'bg-secondary-500 text-white'
          }`}
        >
          {education.icon}
        </div>
        <div className="ml-8">
          <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
          <p className="text-lg text-gray-600 mb-1">{education.institution}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              education.color === 'primary' 
                ? 'bg-primary-100 text-primary-800' 
                : 'bg-secondary-100 text-secondary-800'
            }`}>
              {education.year}
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              education.color === 'primary' 
                ? 'bg-primary-100 text-primary-800' 
                : 'bg-secondary-100 text-secondary-800'
            }`}>
              Grade: {education.grade}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  const PositionCard = ({ position, index }) => {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: 0.1 * index }}
        className={`flex relative p-6 border-l-4 ml-6 mb-8 bg-white rounded-lg shadow-md ${
          position.color === 'primary' 
            ? 'border-primary-500' 
            : 'border-secondary-500'
        }`}
      >
        <div 
          className={`absolute -left-8 top-6 w-14 h-14 rounded-full flex items-center justify-center ${
            position.color === 'primary' 
              ? 'bg-primary-500 text-white' 
              : 'bg-secondary-500 text-white'
          }`}
        >
          {position.icon}
        </div>
        <div className="ml-8">
          <h3 className="text-xl font-bold mb-1">{position.title}</h3>
          <p className="text-lg text-gray-600 mb-2">{position.organization}</p>
          <p className="text-gray-700">{position.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Education & Leadership
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          My academic background and leadership positions
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold mb-6 text-primary-700"
            >
              Education
            </motion.h3>
            <div>
              {education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold mb-6 text-secondary-700"
            >
              Positions of Responsibility
            </motion.h3>
            <div>
              {positions.map((position, index) => (
                <PositionCard key={index} position={position} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;