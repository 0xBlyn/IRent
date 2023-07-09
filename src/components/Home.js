import React from 'react'
import house from '../assets/house1.png'

function Home() {
  return (
    <div>
      <div className='flex flex-row-reverse gradient lg:pt-2 pt-[128px] mt-[-64px] lg:mt-0'>
      <div className='w-[72%] pt-7 lg:w-[50%] lg:ml-2'>
        <img className='lg:w-[100vw]' src={ house } alt='house' />
      </div>
      <div className='lg:w-[50%] lg:mr-[40vw] absolute lg:flex pt-10 lg:pt-24 pl-5'>
        <h1 className='text-white font-bold lg:text-6xl text-2xl max-w-[50%] lg:max-w-[80%] text-center lg:leading-[90px]'>LETS FIND THE PERFECT HOUSE FOR YOU</h1>
      </div>
      </div>
      <div className='filter bg-opacity-70 lg:flex h-[80px] mt-[-90px] lg:mt-[-110px] lg:mx-28 mx-5 rounded-xl px-5 lg:px-[8vw] items-center pt-2 lg:justify-between'>
        <h3 className='text-center text-[#2956A9] font-medium text-sm lg:text-xl pb-2'>Search for your<br className='hidden lg:flex'/> dream home</h3>
        <div className='flex justify-between lg:w-[50vw]'>
          <select className='w-[26%] lg:w-[27%] lg:mr-[30px]'>
            <option value='Location' disabled selected>Location</option>
            <option value='Abia'>Abia</option>
            <option value='Lagos'>Lagos</option>
            <option value='Abuja'>Abuja</option>
          </select>
          <select className='w-[20%] lg:w-[27%] lg:mr-[30px]'>
            <option value='Type' disabled selected>Type</option>
            <option value='Self Contain'>Self Contain</option>
            <option value='One Bedroom Flat'>One Bedroom Flat</option>
            <option value='Two Bedroom Flat'>Two Bedroom Flat</option>
          </select>
          <select className='w-[23%] lg:w-[27%]'>
            <option value='Budget' disabled selected>Budget</option>
            <option value='500k'>500k</option> 
            <option value='300k'>300k</option>
            <option value='150k'>150k</option>
          </select>
          <button className='bg-primary text-white h-[30px] lg:h-[40px] text-xs lg:text-base lg:ml-[50px] px-5 lg:px-8 rounded-lg'>Search</button>
        </div>     
      </div>
    </div>
)}
export default Home
