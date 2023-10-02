'use client'

import React from 'react'
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';


const Header = () => {
  return (
    <header>
          <section
      className="bg-primary-background text-white py-48"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover' }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Ride</h1>
        <p className="text-lg md:text-xl mb-10">
          Explore our wide range of rides and book your next adventure.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Location"
              className="py-3 px-4 pr-12 rounded-full bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            />
            <FaMapMarkerAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Check-In Date"
              className="py-3 px-4 pr-12 rounded-full bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            />
            <FaCalendarAlt className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Seats"
              className="py-3 px-4 pr-12 rounded-full bg-gray-800 text-white w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            />
            <FaUsers className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400" />
          </div>

          <button
            className={`bg-secondary-background text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition-all ease-in-out duration-300`}
          >
            Search
          </button>
        </div>
      </div>
    </section>
    </header>
  )
}

export default Header