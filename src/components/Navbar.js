import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
function Navbar() {
   const [Nav, SetNav] = useState(true);
   const handleClick = () => {
      SetNav(!Nav);
   }
  return (
  
   <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-3xl font-bold text-[#FF0000]'>REACT.</h1>
      <ul className='hidden md:flex'>
         <li className='p-4'>Home</li>
         <li className='p-4'>Company</li>
         <li className='p-4'>Resources</li>
         <li className='p-4'>About</li>
         <li className='p-4'>Contact</li>
      </ul> 
      <div onClick={handleClick} className='block md:hidden'>
         {!Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!Nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000] z-10' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#FF0000] p-10'>REACT.</h1>
      <ul className='uppercase p-4'>
         <li className='p-4 border-b border-gray-100'>Home</li>
         <li className='p-4 border-b border-gray-100'>Company</li>
         <li className='p-4 border-b border-gray-100'>Resources</li>
         <li className='p-4 border-b border-gray-100'>About</li>
         <li className='p-4'>Contact</li>
      </ul> 
      </div>
   </div>
  )
}

export default Navbar;