import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const technicalSkills = [
    { name: 'SQL', level: 90 },
    { name: 'Power BI', level: 85 },
    { name: 'Advanced Excel', level: 95 },
    { name: 'Data Visualization', level: 90 },
    { name: 'Data Analysis', level: 85 },
    { name: 'VLOOKUP', level: 95 },
    { name: 'PivotTable', level: 90 },
    { name: 'MIS Operation', level: 85 },
  ];

  const softSkills = [
    { name: 'Presentation', level: 90 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Critical Thinking', level: 90 },
    { name: 'Team Leadership', level: 85 },
    { name: 'Communication', level: 90 },
  ];

  const SkillBar = ({ name, level }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-base font-medium text-gray-700">{name}</span>
          <span className="text-sm font-medium text-gray-500">{level}%</span>
        </div>
        <div className="w-full h-2.5 bg-gray-200 rounded-full">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          ></motion.div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subtitle"
        >
          A comprehensive overview of my technical and soft skills
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary-700">Technical Skills</h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6 text-secondary-700">Soft Skills</h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {[
              'SQL', 'Power BI', 'Excel', 'Google Sheets', 'Pivot Charts',
              'Google Looker Studio', 'Acme Infinity', 'Data Cleaning',
              'Statistical Analysis', 'Dashboard Creation', 'Visualization'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-full text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 