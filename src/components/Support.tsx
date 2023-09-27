
import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCheckCircle,
  FiMonitor,
  FiShield,
  FiCode,
  FiUsers,
  FiEye,
} from 'react-icons/fi';

const serviceItems = [
  { icon: <FiCheckCircle className = "text-blue-500" />, title: 'Risk Assessment' },
  { icon: <FiEye className = "text-green-500" />, title: 'Security Exploration' },
  { icon: <FiMonitor className = "text-yellow-500" />, title: 'Digital Craftsmanship' },
  { icon: <FiShield className = "text-red-500" />, title: 'Threat Intelligence' },
  { icon: <FiUsers className = "text-purple-500" />, title: 'Team Empowerment' },
  { icon: <FiCode className = "text-pink-500" />, title: 'Code Insight' },
];

const Support: React.FC = () => {
  return (
    <div className="py-6 bg-gray-900 px-4 md:px-10 lg:px-20 py-8 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-gray-800 py-10 px-4 rounded-lg shadow-lg text-white text-center"
      >
        <h1 className="text-[1.6rem] lg:text-4xl font-semibold mb-4">Discover our distinct support solutions to empower your endeavors.</h1>
        <p className="text-gray-300 md:px-12 lg:px-16 mb-8">
        We're dedicated to enhancing your business's potential through specialized support solutions. Our mission is to empower your journey by providing strategic guidance and expert assistance that aligns with your unique needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-4 md:p-6 rounded-lg shadow-md flex items-center space-x-2 md:space-x-4 cursor-pointer transition-all transform"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 text-xl md:text-2xl flex items-center justify-center bg-gray-800 rounded-full">
                {item.icon}
              </div>
              <p className="text-base md:text-lg font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Support;
