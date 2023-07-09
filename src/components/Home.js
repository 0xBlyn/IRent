import React from 'react'
import house from '../assets/house1.png'

function Home() {
  return (
    <div>
      <div className='flex flex-row-reverse gradient lg:pt-2 pt-[128px] mt-[-64px] lg:mt-0'>
      <div className='w-[72%] pt-7 lg:w-[50%] lg:ml-2'>
        <img className='lg:w-[100vw]' src={ house } alt='house' />
      </div>
      <div className='lg:w-[50%] lg:mr-[45vw] absolute lg:flex pt-10 lg:pt-16 pl-5'>
        <h1 className='text-white font-bold lg:text-6xl text-2xl max-w-[50%] lg:max-w-[80%] text-center lg:leading-[90px]'>LETS FIND THE PERFECT HOUSE FOR YOU</h1>
      </div>

      </div>
    </div>
  )
}

export default Home
