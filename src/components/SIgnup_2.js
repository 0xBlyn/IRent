import React, { useState, useEffect } from 'react';
import forms from '../assets/forms.png'
import background from  '../assets/bg1.png'

function Signup2() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='flex'>
      <div className='hidden lg:flex flex-[0]'> 
      <img className='max-h-[120vh] min-w-[40vw]' src={ forms } alt=' a building' />
      </div>
      <div  style={{
        backgroundImage: `url(${isDesktop ? 'aliceblue' : background })`
      }}  className='px-[7%] lg:px-[15%] pt-[120px] lg:pt-0 pb-[8%] bg-[aliceblue] justify-center text-center flex-[1]'>
      <div>
        <div className='bg-white text-left px-[10%] pt-[5%] pb-[8%] rounded-xl mb-9'>
        <h1 className='text-center font-bold text-xl pt-3'>Lets get to know you better</h1>
        <h3 className=' font-medium pb-4 pt-[6%]' >Where do you live:</h3>
        <textarea className='bg-[#ECF3F4] h-[100px] rounded-lg w-full'/>
        <h3 className=' font-medium pb-1  pt-[8%]' >What is your interest in I rent:</h3>
        <h3 className=' font-medium'><input type='radio' className='mr-2'/>I want to sell properties</h3>
        <h3 className=' font-medium'><input type='radio' className='mr-2'/>I want to rent/buy properties</h3>
        <h3 className=' font-medium'><input type='radio' className='mr-2'/>Both</h3>
        <h3 className=' font-medium pb-4 pt-[8%]' >Where do you live:</h3>
        <textarea className='bg-[#ECF3F4] h-[100px] rounded-lg w-full'/> 
        <div className='text-center pt-7'>
            <button className='bg-primary rounded-[10px] text-white px-6 py-2 mr-[8%]  ' type='submit'>Sign up</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Signup2;