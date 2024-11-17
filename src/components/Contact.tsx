import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaComments } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row min-h-screen px-4 md:px-10 lg:px-20 py-8 md:py-10 bg-gray-900">
      {/* Left side */}
      <div className="flex flex-col justify-center bg-gray-800 text-white md:w-full p-6 rounded-tl-md rounded-bl-md rounded-tr-md">
        <h1 className="text-[1.4rem] lg:text-4xl font-semibold mb-4">Let's Turn Your Vision into Reality</h1>
        <p className="text-lg mb-8">
          Fill out the form below and our representative will get in touch with you.
        </p>
        <div className="flex flex-col w-full md:w-auto gap-4">
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={24} />
            <a href='tel:+917078389426'>+91-917078389426</a>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} />
            <a href='mailto:query@safeyourweb.com' target='_blank'>query@safeyourweb.com</a>
          </div>
          <div className="flex items-center gap-4">
            <FaComments size={24} />
            <span>Live Chat Support</span>
          </div>
        </div>
      </div>
      {/* Right side */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full md:w-3/2 py-6 px-3 md:p-4 lg:p-10 bg-gray-800 flex justify-center items-center rounded-tr-md rounded-br-md rounded-bl-md md:py-6 border-t border-cyan-800 md:border-none"
      >
        <form className="w-full max-w-full">
          <h2 className="text-[1.4rem] lg:text-4xl font-semibold mb-6 text-white">Engage in Conversation with Us:-</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <select className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Vulnerability Assessments</option>
              <option value="idea">Threat Detection</option>
              <option value="development">Web Development</option>
              <option value="completed">Security Awareness Training</option>
            
            </select>
          </div>
          <div className="mb-4">
            <textarea
              rows={4}
              placeholder="I am considering to develop for"
              className="w-full p-3 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6 flex items-start">
            <input type="checkbox" className="mr-2 mt-2 flex" />
            <span className="text-gray-600">
              I agree to receive marketing communications from Safe Your Web
            </span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Let’s Begin Our Talk
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
