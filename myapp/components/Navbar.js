'use client'

import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from 'next-auth/react';
import { FaCar } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const { data: session } = useSession();
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const underlineClasses = `absolute left-0 bottom-0 w-0 h-[1px] bg-tan-primary transition-all transform origin-left ${
    isHovered ? 'group-hover:w-full group-hover:translate-x-full' : ''
  }`;

  return (
    <header className='sticky top-0 bg-primary-background z-10 border-b-1'>
      <div className='flex items-center justify-center mx-auto max-w-[300px] py-6 px-4'>
        <div className='mr-16'>
          <Link href='/'>
            <span className='group relative'>
              <FaCar className='text-tan-primary text-4xl' />
              <span className={underlineClasses} />
            </span>
          </Link>
        </div>
        {session?.user ? (
          <>
            <Link className='mr-1 text-gray-400 font-bold' href={'/admin'}>
              Admin
              <span className={underlineClasses} />
            </Link>
            <button
              className='text-gray-400 font-bold'
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <span className='group relative'>
              <Link
              className='mr-2 text-gray-400 font-bold'
                href={'/login'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Login
                <span className={underlineClasses} />
              </Link>
            </span>
            <span className='group relative'>
              <Link
                className='text-gray-400 font-bold'
                href={'/register'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Register
                <span className={underlineClasses} />
              </Link>
            </span>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
