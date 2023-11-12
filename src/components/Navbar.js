import React from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from 'react-icons/io';

function Navbar() {
  return (
    <div style={{ zIndex: 5 }} className='w-full h-[4rem] bg-white border-b border-[#DEDFE2] shadow-md flex items-center justify-between pl-[4rem] pr-[4rem] fixed top-0'>
      <div  className='logo'>
          <img src={logo} alt="" />
      </div>
      <div className='flex justify-around items-center'>
        <div className='font-black flex justify-between items-center gap-[2rem] sm:hidden md:hidden'>
                <button className=''>Features</button>
                <button>Exchanges</button>
                <button>How it Works?</button>
                <button>Blog</button>
                <button>About us</button>
        </div>
      
        <button type="button" class="text-blue-800 hover:text-white border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-m font-black px-8 py-1.5 text-center m-auto ml-[4rem] sm:hidden md:hidden">
            Sign In
        </button>
        <IoMdMenu className='hidden text-4xl md:inline-flex sm:inline-flex'/>
      </div>
    </div>
  )
}

export default Navbar
