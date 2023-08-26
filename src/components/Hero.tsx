
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import secureImg from "../assets/b2.jpg";

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen border-b-[0.5px] border-slate-900 bg-gradient-to-b from-[#06041e] to-[#111111]">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center gap-4 px-4 md:px-10 lg:px-20 py-8 md:py-16 lg:py-24">
        <motion.div
          className="w-full md:w-1/2 lg:w-3/5"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <p className="text-sky-200">Best In Security</p>
          <h1 className="text-xl md:text-2xl lg:text-4xl leading-[1.5] mt-4 md:mt-8 text-white">
            We Protect and Grow Your Business, with Bold IT Security Services
            Don’t Risk Your Business’s Future, Choose Our Top-Rated IT Security
            Services.
          </h1>
          <p className="text-slate-400 mt-2 md:mt-5">
            Elevate Your Business with Our Acclaimed IT Security Solutions
          </p>
          <button className="px-8 py-2 bg-transparent text-slate-200 mt-6 md:mt-12 border rounded-full hover:bg-slate-200 hover:text-slate-950 hover:border-slate-200 duration-300">
            <Link to={"/"}>Explore Our Services</Link>
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 lg:w-2/5 p-4 md:p-8 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <motion.img
            className="w-full"
            src={secureImg}
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
