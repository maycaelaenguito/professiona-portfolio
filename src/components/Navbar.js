import React from 'react';
import './navbar.css';
import Logo from '../assets/may.png';
import { RiSendPlaneFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='navbar lg:px-48 md:px-24 px-2'>
      <div className="nav-menu flex justify-between pt-6">
        <div className="logo lg:w-[100px] w-[60px] md:w-[80px]">
            <img src={Logo} alt="logo" />
        </div>
        <div className="contact-btn">
          <button className="border-solid border-2 rounded-lg border-[#ffbb1c9b] relative w-[160px] h-[40px] md:w-[170px] md:h-[45px] group hover:bg-[#FFBC1C] flex flex-row items-center justify-center">
          <span className="text-[#ffab24] group-hover:text-white text-sm sm:text-md font-bold">Connect With Me</span>
          <span className="md:pl-2">
              <RiSendPlaneFill className="text-[#ffab24] group-hover:text-white" />
          </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
