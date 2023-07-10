import React from 'react'
import logo from '../assets/logo_white.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className='bg-primary p-5 pt-9'>
      <div className='flex justify-between pb-2'>
        <div className='max-w-[30%]'>
          <img className='max-w-[100px] mb-[-30px] ml-[-8px] mt-[-24px]' src={ logo } alt='irent logo' />
          <h3 className='text-white text-xs'>Connecting you to the best houses.</h3>
        </div>
        <div className='footer text-white text-sm'>
          <h2 className='font-bold'>Quick links</h2>
          <h3><a href='#12'>Properties</a></h3>
          <Link to='/terms_and_conditions'><h3>Terms and conditions</h3></Link>
          <h3><a href='#12'>Privacy policy</a></h3>
        </div>
        <div className='footer text-white text-sm'>
          <h2 className='font-bold'>Contact uS</h2>
          <h3><a href='#12'>34 Oron Road</a></h3>
          <h3><a href='#12'>irent@gmail.com</a></h3>
          <h3><a href='#12'>08096743888</a></h3>
        </div>
      </div>
      <div className='py-4 flex justify-evenly items-center'>
          <div className='flex text-sm'>
            <input className='flex rounded-l-xl h-[40px] px-3 w-[150px]' placeholder='Enter your email'/>
            <button className='bg-primary2 rounded-r-xl text-white px-3 max-h-[40px]'>Subscribe</button>
          </div>
          <div className='footer w-[34vw] px-5 text-white'>
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
          </div>
      </div>
    </div>
  )
}

export default Footer
