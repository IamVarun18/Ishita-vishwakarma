import React from 'react'
import { BiSolidDownArrow } from 'react-icons/bi'

const Upcoming = () => {
  return (
    <div className='h-screen bg-pink bg-no-repeat bg-size flex  relative justify-center items-center'>
      <div className='flex flex-col gap-y-14 justify-center items-center'>
        <h1 className='text-center leading-normal lg:text-8xl text-4xl font-light'>
          Recent & Upcoming <br /> Releases <br /> |
        </h1>
        <button className='rounded lg:static absolute bottom-40 px-14 py-2 p-10 bg-white flex items-center gap-x-2'>
          <h2 className='text-2xl font-medium'>View All</h2>
        </button>
        <div className='absolute bottom-10'>
          <BiSolidDownArrow size={44} />
        </div>
      </div>
    </div>
  )
}

export default Upcoming
