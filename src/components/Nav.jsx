import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      <div
        className={`md:hidden pl-5 order-1 ${
          darkMode ? 'text-white' : 'text-black'
        }`}
      >
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <ul className=' hidden md:flex gap-10 text-white'>
        <li className='bg-blue-800 px-4 rounded'>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className='bg-yellow-400 px-4 rounded'>
          <NavLink to={'/projects'}>Projects</NavLink>
        </li>
        <li className='bg-green-800 px-4 rounded'>
          <NavLink to={'/services'}>Services</NavLink>
        </li>
        <li className='bg-red-800 px-4 rounded'>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
      {isOpen && (
        <ul className='md:hidden mt-4 flex flex-col gap-4 font-sans'>
          <li>
            <NavLink to='/' onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={toggleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={toggleMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' onClick={toggleMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
