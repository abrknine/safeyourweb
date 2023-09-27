import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import noJobs from '../assets/no-openings.jpg'

interface Career {
  id: number;
  position: string;
  department: string;
  description: string;
}

const Career: React.FC = () => {
  const careersData: Career[] = []; 
  return (
    <motion.div
      id='career'
      className="min-h-screen text-white border-b-[0.5px] border-slate-700 bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >  
      <Navbar />    {/* Navbar */}

      <h1 className="text-4xl font-bold mb-8 text-center mt-10">Join Our Team</h1>
      {careersData.length === 0 ? (
        <div className='relative mt-24 md:mt-auto flex justify-center items-center'>
            <p className="text-xl text-center absolute bottom-[-60px] sm:bottom-[-20px] md:bottom-[-30px] ">Sorry, there are currently no job openings.</p>
            <img src={noJobs} alt="noJobs" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careersData.map((job, index) => (
            <div key={index} className="border border-gray-600 rounded-lg p-4">
              <div className="text-2xl font-semibold mb-2">
                {job.position}
              </div>
              <div className="flex items-center mb-2">
                <FaBriefcase className="mr-2" />
                {job.department}
              </div>
              <div className="mb-4">{job.description}</div>
              <Link
                to={`/apply/${job.id}`}
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Career;
