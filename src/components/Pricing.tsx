import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from './utils/PricingCard';
import { FaGlobe, FaShieldAlt, FaBug, FaBell, FaUserShield, FaDatabase } from 'react-icons/fa';

interface PricingItemProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactElement;
}

const pricingItems: PricingItemProps[] = [
  {
    title: 'Security Awareness Training',
    description: 'Education to understand and mitigate cyber threats. Learn about common web vulnerabilities and how to assess and address them.',
    price: '49',
    features: ['Fully interactive training', 'Web Vulnerability Assessments'],
    icon: <FaGlobe className="text-3xl text-blue-400" />,
  },
  {
    title: 'Web Development',
    description: 'Custom-designed websites and web applications. Build robust web solutions with security at the forefront of the development process.',
    price: 'Contact',
    features: ['Robust web applications', 'Proper security measures'],
    icon: <FaShieldAlt className="text-3xl text-yellow-400" />,
  },
  {
    title: 'Vulnerability Assessments',
    description: 'Identify and evaluate security vulnerabilities. Our expert team will perform thorough assessments based on OWASP Top 10 standards.',
    price: '100',
    features: ['Assessments on OWASP Top 10'],
    icon: <FaBug className="text-3xl text-red-500" />,
  },
  {
    title: 'Threat Detection',
    description: '24/7 monitoring on web server to prevent cyber attacks. Our advanced threat detection system keeps your web server secure around the clock.',
    price: '149',
    features: ['Continuous monitoring', 'Suspicious activity alerts'],
    icon: <FaBell className="text-3xl text-green-400" />,
  },
  {
    title: 'Cybersecurity Consultation',
    description: 'Expert advice for strengthening your security strategy. Get personalized recommendations and a thorough risk assessment.',
    price: '200',
    features: ['Personalized recommendations', 'Risk assessment'],
    icon: <FaUserShield className="text-3xl text-purple-400" />,
  },
  {
    title: 'Database Security Audit',
    description: 'Ensure your databases are secure and compliant. Our comprehensive audit covers data protection and compliance standards.',
    price: '299',
    features: ['Comprehensive database audit', 'Data protection'],
    icon: <FaDatabase className="text-3xl text-indigo-400" />,
  },
];

const PricingList: React.FC = () => (
  <div className="bg-gray-900 md:px-10">
    <div className="container mx-auto text-center mb-6">
      <h1 className="text-3xl font-semibold text-white">Choose Your Plan</h1>
      <p className="text-gray-400 mt-2">
        Elevate your online security with our range of comprehensive plans designed to fit your needs.
      </p>
    </div>
    <div className="flex flex-wrap justify-center mx-6">
      {pricingItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6"
        >
          <PricingCard {...item} />
        </motion.div>
      ))}
    </div>
  </div>
);

export default PricingList;