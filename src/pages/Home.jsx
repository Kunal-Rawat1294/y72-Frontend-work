import React from 'react'
import HomeUpperText from '../components/home/HomeUpperText'
import HomeLowerText from '../components/home/HomeLowerText'
import Video from '../components/home/Video'
import HomeMiddleText from '../components/home/HomeMiddleText'


const Home = () => {
  return (
    <div className='h-full w-full text-white font-[font2] overflow-hidden'>

      <div className='h-full w-full fixed'>
        <Video />
      </div>
      <div className='h-screen relative  w-screen z-20 flex flex-col overflow-hidden gap-12  lg:justify-center py-2 md:gap-8 md:justify-end justify-end '>
        <HomeUpperText />
        <div className='flex justify-end items-center self-end w-[300px]'>
          <HomeMiddleText />
        </div>
        <HomeLowerText />
      </div>
    </div>
  )
}

export default Home