import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const socialIcons = [
  { icon: FaFacebook, link: '#' },
  { icon: FaTwitter, link: '#' },
  { icon: FiLinkedin, link: '#' },
  { icon: FiInstagram, link: '#' },
  { icon: FiMail, link: '#' },
];

const Footer: React.FC = () => {
  const resources = [
    'Blog',
    'Press Releases',
    'Guides',
    'more...',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 md:py-12 px-8 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Company</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Vulnerability Assessments
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Threat Detection
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Security Awareness Training
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Web Development
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Industries</h2>
          <ul className="list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                Internet Security
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Cybersecurity Consultation
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Resources</h2>
          <ul className="list-none">
            {resources.map((item, index) => (
              <li key={index}>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto py-4 px-4 md:px-8 flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
        <div>
          <p>&copy; 2023 Safe Your Web. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-white transition duration-300"
                whileHover={{ scale: 1.2 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="text-2xl" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
