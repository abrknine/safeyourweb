import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 flex justify-between items-center md:px-8 lg:px-10 text-white shadow-2xl relative">
      <div className='h-full flex items-center'>
        <img className="h-24 mt-4" src={logo} alt="logo" />
        <Link to={'/'} className='text-lg md:text-2xl cursor-pointer hover:text-slate-200'>Safe Your Web</Link>
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
          isMenuOpen ? 'translate-x-0 flex items-center pt-20 text-center' : 'translate-x-full'
        } lg:static lg:transform-none lg:w-auto lg:bg-transparent lg:flex`}
      > 
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
         <Link to={'/'} onClick={toggleMenu} className="block p-4">Home</Link>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#services" onClick={toggleMenu} className="block p-4">Services</a>
        </li>   
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#about" onClick={toggleMenu} className="block p-4">About Us</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#pricing" onClick={toggleMenu} className="block p-4">Our-Pricing</a>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <Link to={'/career'} className="block p-4">Career</Link>
        </li>
        <li className="md:my-0 my-2 hover:text-cyan-600 duration-500">
          <a href="#contact" onClick={toggleMenu} className="block p-4">Contact</a>
        </li>
        <li className="md:my-0 my-2 flex items-center bg-slate-500 lg:bg-transparent rounded-full hover:bg-slate-200 hover:text-cyan-600 duration-500">
          <a href="tel:+917078389426" onClick={toggleMenu} className="block p-4"><MdOutlinePhoneInTalk size={25} /></a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
