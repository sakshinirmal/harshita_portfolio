import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Londe Jewellers Pvt Ltd',
      period: 'Dec 2023 - Present',
      description: [
        'Daily, Weekly, Monthly, Quarterly and Yearly Report to Management.',
        'Created FMS for different processes like order, booking, after sales, wedding customers, Reference so that timely achievement to every day activity.',
        'Sales Performance Matrix & Business Matrix Dashboards',
        'Weekly & monthly KPI Sheet.',
        'Monthly Scheme Installment Tracker.',
        'Salary Automation Sheet & HR FMS Process.',
        'CRM Tracker Process.',
        'Inventory Reorder Management.',
        'Collaborate with different departments for Data Accuracy and make easy daily processes Form Smooth Flow of Business.',
        'FMS Report, Sales staff performance, Dashboard, Business matrix, Google Sheet, Google sites, Pivot Chart, Google Looker Studio, Acme Infinity, Power BI, SQL, Data Analysis.',
        'I conducted data cleaning, statistical analysis, and created insightful visualisations. My contributions led to improved data accuracy and supported data-driven decision-making, enhancing my proficiency in data analysis tools and teamwork.'
      ]
    },
    {
      title: 'Data Analyst Intern',
      company: 'TRON Softech, Pune',
      period: 'May 2023 - Aug 2023',
      description: [
        'Gather and process data from various sources to support business analysis and reporting.',
        'Create and maintain dashboards and reports to facilitate data driven decision making.',
        'Provide support to regulatory analysis and reporting requirement.'
      ]
    },
    {
      title: 'Marketing Analyst Intern',
      company: 'JNR Management, Delhi',
      period: 'May 2022 - Jul 2022',
      description: [
        'Collect, analyse, and interpret data related to market trends, customer behaviour, and competitor activities.'
      ]
    },
    {
      title: 'Marketing Intern',
      company: 'TheHitavada, Nagpur',
      period: 'Dec 2021 - Jan 2022',
      description: [
        'Amplified Twinkle Star Magazine sales through strategic school promotions, driving targeted marketing campaigns.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey in the world of data analysis and marketing
          </p>
        </motion.div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative border-l-4 border-primary-500 pl-8 ml-4">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                <div className="absolute -left-12 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-sm" />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
                    <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                      <FaCalendarAlt className="mr-2" />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  
                  <div className="text-lg font-medium text-primary-600 mb-4">
                    {experience.company}
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 