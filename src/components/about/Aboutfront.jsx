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
    <AboutMe /> // Render AboutMe when it's mobile view
  ) : (
    <div className='h-screen p-10 gap-[10%] bg-pink flex items-center justify-center'>
      <div className='flex flex-col gap-5 basis-2/3'>
        <h1 className='font-normal text-red text-9xl px-8'>About Me</h1>
        <p className='px-8 text-xl'>
          Hi, I&apos;m Ishita Vishwakarma, a playback singer and proud winner of
          Zee TV&apos;s Sa Re Ga Ma Pa 2019. Known globally as &quot;Chhoti Lata
          Ji,&quot; I&apos;ve performed Lata Mangeshkar Ji&apos;s classics
          across countries like London, Canada, Dubai, and more.
        </p>
        <p className='px-8 text-xl'>
          My achievements include collaborating with Arijit Singh in Pyar Hai
          Toh Hai (2023), becoming a Brand Ambassador for Lado Abhiyan, and
          receiving the prestigious DHRUV Tara award. Music is my passion, and
          I&apos;m grateful to share it worldwide.
        </p>
      </div>
      <div className='h-[80%] w-[30%] shadow-2xl bg-red'>
        <Slider />
      </div>
    </div>
  )
}

export default Aboutfront
