import React from 'react'

function Searchbar() {
  return (
    <div className='bg-blue2 flex md:hidden h-16 px-5 items-center justify-between absolute w-full'>
      <div className='flex items-center bg-white rounded-lg px-2'>
        <lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover" colors="primary:#000" style={{width:"25px",height:"25px",opacity:"58%"}}></lord-icon>
        <input className='w-[45vw] p-2 focus:outline-none focus:no-underline focus:ring-0' type='text' />
      </div>
      <button className='bg-primary2 text-white px-4 py-2 rounded-lg font-semibold'>List Property</button>
    </div>
  )
}

export default Searchbar
