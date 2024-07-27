import React, { useState } from 'react';
import logo from '../../src/assets/Home/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars, faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-blue-800 hover:text-blue-600")} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-blue-800 hover:text-blue-600")} to="/academics">
            Academics
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-blue-800 hover:text-blue-600")} to="/admission">
            Admission
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-blue-800 hover:text-blue-600")} to="/research">
            Research
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "text-blue-600" : "text-blue-800 hover:text-blue-600")} to="/job">
            Job
          </NavLink>
        </div>
        <Link to="/contact" className="hidden md:flex gap-4 items-center bg-blue rounded-full px-8 py-2 text-white hover:text-white">
          <FontAwesomeIcon icon={faEnvelope} />
          Contact Us
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none bg-blue-500">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-center">
          <NavLink className={({ isActive }) => (isActive ? "block text-blue-600 py-2 px-4" : "block text-blue-800 hover:text-blue-600 py-2 px-4")} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "block text-blue-600 py-2 px-4" : "block text-blue-800 hover:text-blue-600 py-2 px-4")} to="/academics">
            Academics
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "block text-blue-600 py-2 px-4" : "block text-blue-800 hover:text-blue-600 py-2 px-4")} to="/admission">
            Admission
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "block text-blue-600 py-2 px-4" : "block text-blue-800 hover:text-blue-600 py-2 px-4")} to="/research">
            Research
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "block text-blue-600 py-2 px-4" : "block text-blue-800 hover:text-blue-600 py-2 px-4")} to="/job">
            Job
          </NavLink>
          <Link to="/contact" className="flex justify-center items-center bg-blue rounded-full py-2 text-white my-2 mx-auto w-1/3 hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='ml-2'>Contact Us</span>
            <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
