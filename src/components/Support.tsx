
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
  { icon: <FiCheckCircle />, title: 'Risk Assessment' },
  { icon: <FiEye />, title: 'Security Exploration' },
  { icon: <FiMonitor />, title: 'Digital Craftsmanship' },
  { icon: <FiShield />, title: 'Threat Intelligence' },
  { icon: <FiUsers />, title: 'Team Empowerment' },
  { icon: <FiCode />, title: 'Code Insight' },
];

const Support: React.FC = () => {
  return (
    <div className="min-h-screen p-20 flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#111115] to-[#06041e]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1, delay: 0.5}}
        className="bg-gray-800 p-10 md:p-20 rounded-lg shadow-lg text-white text-center"
      >
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Discover our distinct support solutions to empower your endeavors.</h1>
        <p className="text-gray-300 md:px-16 mb-8">
        We're dedicated to enhancing your business's potential through specialized support solutions. Our mission is to empower your journey by providing strategic guidance and expert assistance that aligns with your unique needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg shadow-md flex items-center space-x-4 cursor-pointer transition-all transform"
            >
              <div className="w-12 h-12 text-2xl flex items-center justify-center bg-blue-500 rounded-full">
                {item.icon}
              </div>
              <p className="text-lg font-medium">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Support;