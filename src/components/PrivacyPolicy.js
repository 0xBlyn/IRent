import React, { useState, useEffect } from 'react'
import background from '../assets/bg1.png'
function PrivacyPolicy() {
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
    <div style={{ backgroundImage: `url(${isDesktop ? 'aliceblue' : background })` }} className='pt-[128px] pb-[25px] mt-[-64px]'>
      <div className='bg-white2 py-10 px-10 m-7 rounded-[18px]'>
        <h2 className='font-bold text-xl text-center pb-2 lg:pb-8 lg:text-[40px]'>Privacy Policy</h2>
        <ol className='list-decimal lg:list-none text-sm text-justify'>
        <li><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo. viverra eget viverra Nam luctus at, tincidunt Quisque Lorem sit vitae non odio nec hendrerit Sed venenatis nulla, elit. tincidunt Nullam nisi lacus non.</h3></li>
        <li><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin. at, Nunc laoreet at, vehicula, risus leo.</h3></li>
        <li><h3>non convallis. adipiscing Nunc lorem. tincidunt eget hendrerit lorem. tincidunt elit convallis. risus libero, sed ex enim. venenatis orci leo. tincidunt libero, faucibus Nullam sit non. orci non amet, eget tincidunt elementum nec Nunc risus nibh fringilla placerat sapien eu Donec Cras sed ipsum lacus ac ex nec odio lobortis, Nunc dui ipsum tincidunt vel Ut In sollicitudin. varius vehicula, malesuada elit sollicitudin.</h3></li>
        </ol>
      </div>
    </div>
  )
}

export default PrivacyPolicy
