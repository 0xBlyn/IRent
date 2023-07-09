import React from 'react'
import logo from '../assets/logo_white.png'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import { Avatar } from '@mui/material';
import avatar from '../assets/avatar.png'
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function Header() {
  return (
    <div className='bg-primary flex h-14 pt-2 px-3 items-center justify-between relative'>
      <div>
        <img className='w-[120px]' src={ logo } alt='irent logo' />
      </div> 
      <div className='flex mt-[-2%] lg:mt-[-7px] mr-2'>
      <div className='hidden md:flex items-center justify-between '>
      <div className='flex items-center bg-white rounded-lg px-2 mr-5'>
        <lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover" colors="primary:#000" style={{width:"25px", height:"25px",opacity:"58%"}}></lord-icon>
        <input className='w-[24vw] p-1 focus:outline-none focus:no-underline focus:ring-0' type='text' />
      </div>
      <button className='bg-primary2 text-white px-4 py-1 mr-5 rounded-lg font-semibold'>List Property</button>
      </div>
        <lord-icon src="https://cdn.lordicon.com/msetysan.json" trigger="hover" colors="primary:#fff" style={{width:"28px",height:"28px"}}></lord-icon>
        <lord-icon src="https://cdn.lordicon.com/ausvvtws.json" trigger="hover" colors="primary:#fff" style={{width:"28px",height:"28px",paddingLeft:"11px"}}></lord-icon>
        <lord-icon src="https://cdn.lordicon.com/xryjrepg.json" trigger="hover"  colors="primary:#fff" style={{width:"28px",height:"28px",paddingLeft:"19px"}}></lord-icon>
        <Avatar alt="Blossom" src={avatar} sx={{ width: 30, height: 30 }} className='ml-7' />
      </div>
    </div>
  )
}

export default Header
