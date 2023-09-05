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
      <div className="md:hidden flex items-center mr-4 md:mr-auto">
        {isMenuOpen ? (
          <BiX className="z-50 border border-gray-900" size="30px" onClick={toggleMenu} />
        ) : (
          <BiMenu size="30px" onClick={toggleMenu} />
        )}
      </div>

      {/* Responsive Menu */}
      <ul
        className={`${
          isMenuOpen ? 'fixed top-0 bg-gradient-to-b from-[#06041e] to-[#111111] pt-16' : 'hidden'
        } md:flex md:flex-row flex-col md:text-xl md:z-auto z-10 h-screen w-screen md:h-auto transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0 text-center' : 'translate-x-full'
        } md:static md:transform-none md:w-auto md:bg-transparent md:flex`}
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
          <a href="#career" className="block p-4">Career</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#contact" className="block p-4">Contact</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#tel:+1234567890" className="block p-4"><MdOutlinePhoneInTalk size={25} /></a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
