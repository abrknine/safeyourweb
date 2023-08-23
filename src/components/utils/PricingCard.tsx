import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface PricingItemProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: React.ReactElement;
}

const PricingItem: React.FC<PricingItemProps> = ({ title, description, price, features, icon }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-6 shadow-md text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-xl font-semibold ml-2">{title}</h2>
    </div>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex items-center mb-4">
      <span className="text-lg font-semibold mr-2">${price}</span>
      <span className="text-gray-400">/event</span>
    </div>
    <ul className="mb-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <FaCheck className="text-green-400 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-500 text-white py-2 px-4 rounded-full w-full"
    >
      JOIN NOW
    </motion.button>
  </motion.div>
);

export default PricingItem;
