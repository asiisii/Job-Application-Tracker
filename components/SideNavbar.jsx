'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiHome, FiSettings } from 'react-icons/fi';
import { BiMenu, BiMenuAltRight } from 'react-icons/bi';
import AppLogo from './AppLogo';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-900 text-white transition-all duration-500 ${
        isExpanded ? 'w-64' : 'w-32'
      }`}
    >
      {/* Sidebar Header */}
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          {/* Custom Logo */}
          <AppLogo />
        </div>
        {/* Expand/Collapse Icons */}
        <button className='ml-2 focus:outline-none' onClick={toggleSidebar}>
          {isExpanded ? (
            <BiMenuAltRight
              className='h-6 w-6 text-gray-300 hover:text-white'
              title='Collapse'
            />
          ) : (
            <BiMenu
              className='h-6 w-6 text-gray-300 hover:text-white'
              title='Expand'
            />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div className='p-8'>
        <ul className='space-y-2'>
          <li>
            <Link href='/'>
              <p className='flex items-center text-gray-300 hover:text-white'>
                {!isExpanded && <FiHome className='h-6 w-6' />}
                {isExpanded && (
                  <>
                    <FiHome className='h-6 w-6' />
                    <span className='ml-2'>Home</span>
                  </>
                )}
              </p>
            </Link>
          </li>
          <li>
            <Link href='/settings'>
              <p className='flex items-center text-gray-300 hover:text-white'>
                {!isExpanded && <FiSettings className='h-6 w-6' />}
                {isExpanded && (
                  <>
                    <FiSettings className='h-6 w-6' />
                    <span className='ml-2 '>Settings</span>
                  </>
                )}
              </p>
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
