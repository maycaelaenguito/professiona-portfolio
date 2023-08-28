import React from 'react';
import './header.css';


const Header = () => {
  return (
    <div className='header h-screen flex justify-center items-center md:items-start'>
      <div className='md:flex flex-row md:mt-20 lg:mt-28 justify-center'>
        <div className='flex-1 flex md:justify-end justify-center'>
         <div>
            <div className='flex justify-center text-center items-center'> 
                <h1 className='text-[#FFBC1C] text-4xl pt-14 w-[80vw] md:w-[40vw] md:text-5xl lg:text-6xl xl:text-7xl'>Web Designer and Full Stack Developer</h1>
            </div>
            <div className='flex justify-end items-center'>
                <p className='text-[#000000b0] pt-3 xl:pt-10 w-[80vw] md:w-[60vw] lg:w-[50vw] text-sm text-center md:text-lg lg:text-lg xl:text-xl'>Passionate Web Designer & Full Stack Developer, merging creativity and code to deliver captivating digital experiences. Skilled in UI/UX design and front-end/back-end development, crafting innovative solutions that engage and inspire. <span className='text-[#FFBC1C] font-bold'>Let's build something remarkable together!</span></p>
            </div>
         </div>
        </div>
        <div className='flex-1 profile flex justify-center items-center pt-5 md:pt-0'>
          <div className='profile-wrap'>
            <img src="https://res.cloudinary.com/dk3aalcb0/image/upload/v1693206185/Portfolio/Untitled_design_8_intpx4.png" alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
