import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMjMyMzIiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02djZoNnYtNmgtNnptLTEyIDZoNnYtNmgtNnY2em0tNiAwdjZoNnYtNmgtNnptMjQgMGg2di02aC02djZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              Data Analyst
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-700 to-secondary-700 text-transparent bg-clip-text"
          >
            Harshita Nirmal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Transforming data into actionable insights. Experienced in SQL, Power BI, 
            Advanced Excel, and data visualization to drive strategic business decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-primary"
            >
              Contact Me
            </Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-outline"
            >
              View Experience
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex justify-center space-x-6"
          >
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:harshitanirmal390@gmail.com"
              className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-primary-600 cursor-pointer"
          >
            <FaArrowDown />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 