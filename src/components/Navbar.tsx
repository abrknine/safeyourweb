import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 flex justify-between items-center md:px-10 text-white shadow-2xl relative">
      <div className='h-full flex items-center'>
        <img className="h-24 mt-4 sm:ml-8" src={logo} alt="logo" />
        <p className='text-2xl cursor-pointer hover:text-slate-200'>Safe Your Web</p>
      </div>
      <div className="lg:hidden flex items-center mr-4 md:mr-0">
        {isMenuOpen ? (
          <BiX className="z-50 border border-gray-900" size="30px" onClick={toggleMenu} />
        ) : (
          <BiMenu size="30px" onClick={toggleMenu} />
        )}
      </div>

      {/* Responsive Menu */}
      <ul
        className={`${
          isMenuOpen ? 'fixed top-0 bottom-0 left-0 bg-gradient-to-b from-[#06041e] to-[#111111] pt-16' : 'hidden'
        } lg:flex flex-col lg:flex-row text-2xl lg:text-xl lg:z-auto z-10 h-screen w-screen lg:h-auto transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0 text-center' : 'translate-x-full'
        } lg:static lg:transform-none lg:w-auto lg:bg-transparent lg:flex`}
      > 
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
         <a href="#home" className="block p-4">Home</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#services" className="block p-4">Services</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#about" className="block p-4">About Us</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#pricing" className="block p-4">Our-Pricing</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#career" className="block p-4">Career</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#contact" className="block p-4">Contact</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="tel:+917078389426" className="block p-4"><MdOutlinePhoneInTalk size={25} /></a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
