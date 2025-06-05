import React from 'react';
import Nav from './Nav';
import { FaRegMoon } from 'react-icons/fa6';
import { IoIosSunny } from 'react-icons/io';
import { useContext } from 'react';
import DarkModeContext from '../context/DarkModeContext';
const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className=' flex justify-between'>
      <div>
        <h1 className={`text-2xl text-red-500`}>Portfolio</h1>
      </div>
      <div className='flex gap-5 md:gap-16'>
        <div>
          <Nav />
        </div>
        <button onClick={() => setDarkMode((prev) => !prev)} className='pb-2'>
          {darkMode ? (
            <FaRegMoon
              size={24}
              className={` ${darkMode ? 'text-white' : ''}`}
            />
          ) : (
            <span className={` ${darkMode ? '' : 'text-black'}`}>
              <IoIosSunny size={24} />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
