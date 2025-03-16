import React, { useState, useEffect } from 'react'
import Slider from './Slider' // Slider is correctly imported from the 'about' folder
import AboutMe from '../home/AboutMe' // Correct path to the AboutMe component

const Aboutfront = () => {
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024) // Mobile view if width is less than 1024px
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array ensures this runs only once after mount

  return isMobileView ? (
    <AboutMe /> // Render AboutMe when it's mobile
  ) : (
    <div className='h-screen p-10 gap-[10%] bg-pink flex items-center justify-center'>
      <div className='flex flex-col gap-5 basis-2/3'>
        <h1 className='font-normal text-red text-9xl px-8'>About Me</h1>
        <p className='px-8 text-xl'>
          Welcome to my world, where melodies connect hearts! I'm Ishita
          Vishwakarma, winner of Zee TV's Sa Re Ga Ma Pa 2019, fondly called
          'Chhoti Lata Ji.' From global stages to legendary collaborations,
          music is my passion and journey.
        </p>
        <p className='px-8 text-xl'>
          I've worked with Arijit Singh on *Pyar Hai Toh Hai* (2023), become
          Lado Abhiyan's Brand Ambassador, and received the DHRUV Tara Award.
          Music isn't just art—it's my way of touching souls and sharing
          emotions across borders.
        </p>
      </div>
      <div className='h-[80%] w-[30%] shadow-2xl bg-red'>
        <Slider />
      </div>
    </div>
  )
}

export default Aboutfront
