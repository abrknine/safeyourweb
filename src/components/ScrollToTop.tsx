import React, { useState, useEffect } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import { animateScroll as scroll } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    controls.start({ opacity: isVisible ? 1 : 0 });
  }, [isVisible, controls]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      className={`fixed bottom-8 right-8 p-2 cursor-pointer ${
        isVisible ? 'visible' : 'invisible'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scroll.scrollToTop}
      transition={{ duration: 0.3, type: 'spring' }} 
    >
      <div
      >
        <div className="bg-slate-700 text-white rounded-full p-2">
          <BiUpArrowAlt size={25} />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollToTopButton;
