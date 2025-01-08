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
    <div className="h-screen p-10 gap-[10%] bg-pink flex items-center justify-center">
      <div className="flex flex-col gap-5 basis-2/3">
        <h1 className="font-normal text-red text-9xl px-8">About Me</h1>
        <p className="px-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus,
          quia itaque ullam, dolorum facere soluta vel enim dicta consequatur
          nesciunt molestiae culpa. Itaque nostrum error praesentium, libero
          nisi incidunt suscipit at consequatur mollitia sunt ullam expedita
          delectus eum perferendis quos molestiae enim quidem pariatur laborum
          sint magni similique illo!
        </p>
        <p className="px-8 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eaque distinctio, quas eligendi, accusantium neque temporibus numquam
          esse quo ratione possimus delectus libero ducimus eum odio fuga magnam
          aperiam ex! Ad distinctio ipsa at cupiditate omnis ipsam ratione.
        </p>
      </div>
      <div className="h-[80%] w-[30%] shadow-2xl bg-red">
        <Slider />
      </div>
    </div>
  )
}

export default Aboutfront
