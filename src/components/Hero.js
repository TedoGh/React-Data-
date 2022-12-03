import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
   <div className='text-white'>
   <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
     <p className='text-[#FF0000] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
     <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
     <div>
       <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
       <Typed className='md:text-3xl sm:text-2xl text-xl font-bold py-4' strings={['BTB', 'BTC', 'SASS']} 
         typeSpeed={120}
         backSpeed={140}
         loop
         />
     </div>
     <button className='bg-[#FF0000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
   </div>
 </div> 
  )
}

export default Hero;