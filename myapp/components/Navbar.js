'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between mx-auto max-w-screen-lg py-12 px-4'>
        <div>
            HostMyRide
        </div>
        <div>
            <Link href={'/admin'}>Admin</Link>
            <button>Logout</button>
        </div>
    </header>
  )
}

export default Navbar