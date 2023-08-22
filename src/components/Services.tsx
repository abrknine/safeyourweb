import React from 'react';
import { FaShieldAlt, FaCode, FaUserFriends, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion'
import ServiceCard from './utils/ServicesCard';

const ourServices = [
  {
    icon: <FaShieldAlt className="text-slate-300" size={48} />,
    title: 'Vulnerability Assessments',
    context: 'Regular penetration testing and vulnerability assessments can help you identify weaknesses in your IT security infrastructure and address them before they can be exploited by attackers.',
  },
  {
    icon: <FaLightbulb className="text-slate-300" size={48} />,
    title: 'Threat Detection',
    context: 'Your IT security solutions should include robust threat detection and prevention mechanisms to safeguard against cyberattacks such as malware, viruses, and ransomware.',
  },
  {
    icon: <FaCode className="text-slate-300" size={48} />,
    title: 'Web Development',
    context: 'We provide professional and reliable web development services to help businesses establish a strong online presence. Our team of skilled developers and designers work closely with our clients.',
  },
  {
    icon: <FaUserFriends className="text-slate-300" size={48} />,
    title: 'Security Awareness Training',
    context: 'Employees are often the weakest link in IT security, so it’s essential to provide them with regular security awareness training to educate them about cybersecurity best practices',
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="py-10 bg-gray-100 min-h-screen px-16 flex items-center justify-center bg-gradient-to-b from-[#111111] to-[#06041e]">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
    >
      {ourServices.map((service, index) => (
        <ServiceCard key={index} service={service} delay={index * 0.2} />
      ))}
    </motion.div>
  </div>
  );
};

export default OurServices;
