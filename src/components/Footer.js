import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="inline-block p-3 bg-primary-600 hover:bg-primary-700 rounded-full cursor-pointer transition-colors duration-300 mb-8"
          >
            <FaChevronUp />
          </Link>
          
          <h2 className="text-3xl font-bold mb-4">Harshita Nirmal</h2>
          <p className="text-gray-400 mb-8 text-center max-w-md">
            Data Analyst passionate about transforming complex data into actionable insights.
          </p>
          
          <div className="flex space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:harshitanirmal390@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
          
          <div className="w-full md:w-1/2 mx-auto border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {currentYear} Harshita Nirmal. All Rights Reserved.
              </p>
              <div className="flex space-x-8 font-medium text-sm">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  About
                </Link>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Experience
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 