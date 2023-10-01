import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa'; // Import React Icons

const Header = () => {
  return (
    <header className="py-12 px-4 bg-primary-background text-white cursor-pointer">
      <div className="container mx-auto flex flex-col justify-around items-center">
        <div className="logo text-2xl text-center font-bold">
          <span className="text-blue-500">Host</span>
          <span className="text-yellow-500">My</span>
          <span className="text-green-500">Ride</span>
          <p className=' font-light text-lg text-secondary-background mt-2'>
            The Go to Spot for Hosting Your Ride
          </p>
          <div className='flex justify-around text-gray-300 mt-2'>
            <div className='flex items-center'>
              <FaPhone className='h-[14px] text-white mr-1 hover:text-secondary-background' />
              <span className='text-sm hover:text-secondary-background'>Contact Number</span>
            </div>
            <div className='flex items-center '>
              <FaEnvelope className='h-[14px] text-white hover:text-secondary-background' />
              <span className='text-sm mr-1 hover:text-secondary-background'>Email</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
