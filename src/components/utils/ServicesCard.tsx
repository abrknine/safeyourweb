import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Service {
  icon: React.ReactElement;
  title: string;
  context: string;
}

interface ServiceCardProps {
  service: Service;
  delay: number;

}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, delay }) => {
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
        className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg"
      >
        <div className="flex items-center mb-4">
          {service.icon}
          <h3 className="ml-8 sm:text-2xl text-slate-300 font-semibold">{service.title}</h3>
        </div>
        <p className="text-slate-300 leading-[1.7] text-[18px]">{service.context}</p>
        <div className="mt-4 text-blue-600 flex items-center">
          <span>Learn More</span>
          <FiArrowRightCircle className="ml-1" />
        </div>
      </motion.div>
    );
  };
  
  export default ServiceCard;
