import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaComments } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen px-10 md:px-20 py-8 md:py-10 bg-gray-900">
      <div className="bg-gray-800 text-white md:w-1/2 p-10 px-auto flex flex-col justify-center items-center rounded-tl-md rounded-bl-md md:rounded-bl-none md:rounded-tr-md">
        <h1 className="text-4xl font-bold mb-4">Let's Turn Your Vision into Reality</h1>
        <p className="text-lg mb-8">
          Fill out the form below and our representative will get in touch with you.
        </p>
        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center gap-4">
            <FaPhoneAlt size={24} />
            <span>+123-456-7890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope size={24} />
            <span>query@safeyourweb.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaComments size={24} />
            <span>Live Chat Support</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="w-full md:w-1/2 p-6 md:p-10 bg-gray-800 flex justify-center items-center rounded-tr-md rounded-br-md md:rounded-bl-none md:rounded-tr-md md:py-6 border-t border-cyan-800 md:border-none"
      >
        <form className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-white">Engage in Conversation with Us:-</h2>
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
              <option value="">Select Project Stage</option>
              <option value="idea">New Idea</option>
              <option value="development">In Development</option>
              <option value="completed">Completed</option>
              <option value="completed">Other Services</option>
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
