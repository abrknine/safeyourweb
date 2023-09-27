import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is digital security?',
    answer:
      'Digital security refers to the practice of protecting digital information and assets from unauthorized access, cyber attacks, and data breaches. It encompasses measures to ensure the confidentiality, integrity, and availability of digital resources.',
  },
  {
    question: 'How can I enhance my internet security?',
    answer:
      'To enhance internet security, you can use strong and unique passwords, keep your software up to date, use a reliable antivirus program, and be cautious of phishing scams. Additionally, avoid connecting to public Wi-Fi networks without proper security measures.',
  },
  {
    question: 'What does cyber security involve?',
    answer:
      'Cyber security involves a range of practices and technologies aimed at safeguarding computer systems, networks, and data from cyber threats and attacks. It includes risk management, vulnerability assessment, intrusion detection, and incident response.',
  },
  {
    question: 'Why is data security important?',
    answer:
      'Data security is crucial to protect sensitive and personal information from being accessed or manipulated by unauthorized individuals or entities. Breaches in data security can lead to financial losses, identity theft, and damage to an individual\'s or organization\'s reputation.',
  },
  {
    question: 'What is encryption?',
    answer:
      'Encryption is the process of converting information into a code to prevent unauthorized access. It involves using algorithms to transform data into an unreadable format that can only be deciphered with the appropriate decryption key. Encryption adds a layer of security to sensitive data.',
  },
  {
    question: 'How do you handle security incidents?',
    answer:
      'In the event of a security incident, we have a dedicated team that follows established protocols for incident response. This includes identifying the breach, containing the threat, analyzing the impact, and taking appropriate measures to mitigate the damage. We also work to enhance security measures to prevent future incidents.',
  },
  {
    question: 'Do you offer training for employees?',
    answer:
      'Yes, we provide training sessions and workshops to educate employees about best practices for digital security. Our training covers topics such as recognizing phishing emails, creating strong passwords, and using secure communication tools. Well-trained employees are a critical part of overall security.',
  },
];

const FAQPage: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id='faq' className="bg-gray-900 text-white py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-[1.6rem] lg:text-4xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded shadow-md">
              <div
                className="flex items-center justify-between cursor-pointer border-b border-gray-700 md:px-6 md:py-2 pb-3"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {expandedIndex === index ? (
                  <FaChevronDown className="h-6 w-6 text-gray-400 transition-transform transform rotate-180 duration-500" />
                ) : (
                  <FaChevronDown className="h-6 w-6 text-gray-400 transition-transform transform duration-500" />
                )}
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    className="mt-3 text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
    </section>
  );
};

export default FAQPage;
