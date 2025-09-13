import React from 'react'
import { Link } from 'react-router-dom'

const HomeLowerText = () => {
  return (
    <div className='flex text-white justify-center   items-center  gap-2 '>
      <div className='border-3 hover:border-[rgb(211,253,80)] hover:text-[rgb(211,253,80)] leading-[13px] pt-2 lg:pt-9 lg:leading-[1.2vw] pb-1 border-white rounded-full px-1 lg:px-10 py-0 '>
        <Link className='text-[5.7vw] uppercase ' to='/projects'>Projects</Link>
      </div>
      <div className='border-3 hover:border-[rgb(211,253,80)] hover:text-[rgb(211,253,80)] leading-[13px] pt-2 lg:pt-9 lg:leading-[1.2vw] pb-1 border-white rounded-full px-1 lg:px-10 py-0 '>
        <Link className='text-[5.7vw] uppercase ' to='/agence'>agence</Link>
      </div>
    </div>
  )
}

export default HomeLowerText