import React from 'react'
import logo from '../assets/logo_white.png'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function Header() {
  return (
    <div className='bg-primary flex h-16 pt-2 px-3 items-center'>
      <div>
        <img className='w-[120px]' src={ logo } alt='irent logo' />
      </div>
      <div>
        <lord-icon src="https://cdn.lordicon.com/msetysan.json" trigger="hover" colors="primary:#fff" style={{width:"28px",height:"28px"}}></lord-icon>
        <lord-icon src="https://cdn.lordicon.com/ausvvtws.json" trigger="hover" colors="primary:#fff" style={{width:"28px",height:"28px",paddingLeft:"7px"}}></lord-icon>
        <lord-icon src="https://cdn.lordicon.com/xryjrepg.json" trigger="hover"  colors="primary:#fff" style={{width:"28px",height:"28px",paddingLeft:"13px"}}></lord-icon>
      </div>
    </div>
  )
}

export default Header
