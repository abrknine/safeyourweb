import React, { useState } from 'react';
import { BiMenu, BiPhoneCall, BiX } from 'react-icons/bi';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 flex justify-between items-center md:px-10 text-white shadow-2xl relative">
      <img className="h-full sm:ml-8" src={logo} alt="logo" />

      {/* Hamburger Menu Button */}
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
        } md:flex md:flex-row flex-col md:z-auto z-10  h-screen w-screen md:h-auto transition-transform duration-500 transform ${
          isMenuOpen ? 'translate-x-0 text-center' : 'translate-x-full'
        } md:static md:transform-none md:w-auto md:bg-transparent md:flex`}
      >
        <li className="md:my-0 my-2">
          <a href="#" className="block p-4">Services</a>
        </li>
        <li className="md:my-0 my-2">
          <a href="#" className="block p-4">About Us</a>
        </li>
        <li className="md:my-0 my-2">
          <a href="#" className="block p-4">Career</a>
        </li>
        <li className="md:my-0 my-2">
          <a href="#" className="block p-4">Contact</a>
        </li>
        <li className="md:my-0 my-2">
          <BiPhoneCall size={"30px"} className="p-4" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
