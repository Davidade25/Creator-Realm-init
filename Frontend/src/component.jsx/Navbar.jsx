import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-[90%] m-auto'>
        <img src="CR Logo.svg" alt="Creator Realm Logo" />
        <ul className='flex justify-between gap-5'>
            <li>Find Job</li>
            <li>Find Talent</li>
            <li>Post Job</li>
            <li>Why us</li>
            <li>Community</li>
            <li>More</li>
        </ul>
        <div className='flex justify-between gap-4'>
            <button>Log in</button>
            <button className='bg-[#3A5E99] text-amber-50 px-2 py-1 rounded-[7px]'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar