import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  icon: React.ReactElement;
  title: string;
  context: string;
  delay: number;

}


const ServiceCard: React.FC<Service> = ({ icon, title, context, delay }) => {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };
  
    return (
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay }}
        className="p-4 rounded-lg bg-gray-800 bg-opacity-50 shadow-lg">
      {icon}
      <h3 className="text-lg font-semibold my-2">{title}</h3>
      <p className="text-gray-300">{context}</p>
    </motion.div>
    );
  };
  
  export default ServiceCard;
