import React from 'react';
import { FaShieldAlt, FaCode, FaLightbulb } from 'react-icons/fa';
import { BiSolidGroup } from 'react-icons/bi'
import { motion } from 'framer-motion'
import ServiceCard from './utils/ServicesCard';

const ourServices = [
  {
    icon: <FaShieldAlt className="text-[#00fff1] text-3xl" />,
    title: 'Vulnerability Assessments',
    context: 'Regular penetration testing and vulnerability assessments can help you identify weaknesses in your IT security infrastructure and address them before they can be exploited by attackers.',
  },
  {
    icon: <FaLightbulb className="text-red-500 text-3xl" />,
    title: 'Threat Detection',
    context: 'Your IT security solutions should include robust threat detection and prevention mechanisms to safeguard against cyberattacks such as malware, viruses, and ransomware.',
  },
  {
    icon: <FaCode className="text-green-500 text-4xl" />,
    title: 'Web Development',
    context: 'We provide professional and reliable web development services to help businesses establish a strong online presence. Our team of skilled developers and designers work closely with our clients.',
  },
  {
    icon: <BiSolidGroup className="text-purple-500 text-4xl" />,
    title: 'Security Awareness Training',
    context: 'Employees are often the weakest link in IT security, so it’s essential to provide them with regular security awareness training to educate them about cybersecurity best practices',
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-8 md:py-10 flex flex-col items-center justify-center gap-8 text-white bg-gray-900">
      <h1 className='text-[1.6rem] md:text-4xl font-semibold'>Embark on a Journey Through Our Offerings</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
      >
        {ourServices.map((service, index) => (
         <motion.div
              key={index}
              className="bg-gray-800 p-4 md:p-6 rounded shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
         >
           <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            context={service.context}
          />
         </motion.div>
        ))}
      </motion.div>
    </div>
  );
};


export default OurServices;
