'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AppLogo from './AppLogo';

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setDisplayMenu(!displayMenu);

  return (
    <header className='flex h-[10vh] max-w-screen-xl mx-auto items-center bg-[#032A30] my-4'>
      <div className='flex h-16 w-full justify-between'>
        {/* app logo */}
        <AppLogo />
        <div className='hidden flex-shrink-0 items-center sm:flex'>
          <button
            className='self-center rounded px-8 py-3 text-[#E3FDFD]'
            onClick={() => {
              toggleMenu();
              router.push('/signin');
            }}
          >
            Sign in
          </button>
          <button
            className='self-center rounded px-8 py-3 font-semibold bg-[#71C9CE] text-[#074F57]'
            onClick={() => {
              toggleMenu();
              router.push('/signup');
            }}
          >
            Sign Up
          </button>
        </div>
        <button className='cursor-default sm:hidden'>
          {/* hamburger menu */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6 cursor-pointer text-[#71C9CE]'
            onClick={toggleMenu}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
      {/* side menu - slide in from right */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-3/5 transform transition-transform duration-300 bg-[#021E25] sm:hidden ${
          displayMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-screen flex-col justify-center px-8 '>
          <button className='absolute right-10 top-6' onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6 text-[#71C9CE]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div className='flex flex-col items-center space-y-4'>
            <button
              className='rounded px-8 py-3 text-white'
              onClick={() => {
                toggleMenu();
                router.push('/signin');
              }}
            >
              Sign In
            </button>
            <button
              className='rounded px-8 py-3 font-semibold bg-[#71C9CE] text-white'
              onClick={() => {
                toggleMenu();
                router.push('/signup');
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
