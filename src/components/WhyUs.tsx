import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUsers,
  FaMoneyBill,
  FaHeadset,
  FaLock,
} from "react-icons/fa";

const advantages = [
  {
    title: "Advanced Threat Detection",
    description:
      "Our advanced security solutions employ cutting-edge technology to detect and prevent a wide range of cyber threats, ensuring your digital assets are always safe.",
    icon: <FaShieldAlt size={32} className="text-blue-500" />,
  },
  {
    title: "Expert Security Team",
    description:
      "With a team of seasoned cybersecurity experts, we bring a wealth of experience to the table. Rest assured, your business is in capable hands.",
    icon: <FaUsers size={32} className="text-green-500" />,
  },
  {
    title: "Tailored Security Plans",
    description:
      "Choose from a variety of customizable security plans that cater to your specific needs. Our plans are designed to fit your budget and provide maximum protection.",
    icon: <FaMoneyBill size={32} className="text-yellow-500" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated customer support team is available around the clock to assist you with any queries or concerns. Your security is our top priority.",
    icon: <FaHeadset size={32} className="text-purple-500" />,
  },
  {
    title: "Data Encryption",
    description:
      "We utilize state-of-the-art encryption techniques to ensure the confidentiality of your sensitive data, safeguarding your digital assets from unauthorized access.",
    icon: <FaLock size={32} className="text-red-500" />,
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="py-4 md:py-8 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-[#06041e] to-[#111115]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-center text-white">
          Our Security Advantages
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-300 mb-8">
          Discover why our digital security services are the best choice to keep
          your assets safe from cyber threats.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 md:p-6 rounded shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-2 md:mb-4">{advantage.icon}</div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-white">
                {advantage.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
    </section>
  );
};


export default WhyUs;
