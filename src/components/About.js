import React from 'react';
import './header.css';

const About = () => {
  return (
    <div className='about bg-[#FFBC1C] h-[100vh] flex justify-center items-center'>
      <div className="sub text-center ">
        <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#000]'>Hi, I'm Maycaela Enguito.</h1>
        <div className='flex justify-center items-center'>
            <p className='w-[80vw] text-[#000000b6] mt-5 text-sm xl:text-lg'>I'm experienced in independent and collaborative work, delivers high-quality projects within tight deadlines, detail-oriented with a passion for creating innovative, user-friendly web applications, strong problem-solving abilities and excellent communication skills. Committed to staying up-to-date with emerging technologies and delivering exceptional results.</p>
        </div>
        <div className=''>
            <h2 className='mt-20'>Languages and Tools I Use</h2>
            <div className='tools'>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
