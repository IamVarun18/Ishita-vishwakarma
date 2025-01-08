import React from 'react'

const PressHome = () => {
  return (
    <div className='h-screen bg-pink flex flex-col lg:flex-row lg:justify-center align-middle items-center lg:items-end justify-end '>
      <div className='lg:h-[75%] lg:w-[45%] w-[95%] gap-[15%] flex flex-col  lg:justify-center      '>
        <h1 className=' lg:text-9xl text-7xl  font-semibold text-red'>
          Press & <br />
          Release
        </h1>
        <h4 className=' text-3xl text-red'>Explore</h4>
      </div>

      <div className='lg:h-[75%] h-[60%] lg:w-[45%] w-[95%]  gap-3 justify-center items-center grid-cols-3 grid  '>
        <div className=' h-[80%]  bg-[#EAEAEA] shadow-2xl  '></div>
        <div className='h-[80%]  bg-[#EAEAEA]  shadow-2xl  '></div>
        <div className='h-[80%]  bg-[#EAEAEA]  shadow-2xl  '></div>
      </div>
    </div>
  )
}

export default PressHome
