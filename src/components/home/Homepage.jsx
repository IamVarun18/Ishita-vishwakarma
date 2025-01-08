const Homepage = () => {
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1542327767-84a0608a44a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover h-screen">
      {/* Overlay for better contrast */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Main Text Section */}
      <div
        className='relative z-10 flex flex-col 
      items-center md:items-start justify-center h-full px-6 md:px-16 text-center md:text-left'
      >
        <div className=' bottom-[18%]   lg:bottom-0 flex-col items-start flex lg:flex-col lg:relative absolute '>
          <h1 className='text-5xl md:text-6xl lg:font-semibold font-semibold text-white'>
            Ishita
          </h1>
          <h1 className='text-5xl md:text-6xl lg:font-medium font-extralight text-white'>
            Vishwakarma
          </h1>

          <p className='mt-4 text-sm md:text-lg text-gray-300 max-w-lg'>
            Winner Of{' '}
            <span className='font-semibold !text-white'>Sa Re Ga Ma Pa</span> |
            1st Runner Up{' '}
            <span className='font-semibold !text-white'>
              India's Got Talent
            </span>
          </p>
        </div>
      </div>

      {/* Signature Section */}
      <div className='relative'>
        <div className='absolute lg:bottom-20 lg:left-[7%] md:transform md:-translate-x-1/2 md:flex md:flex-col md:items-center bottom-4 left-5 '>
          <img
            src='ICONS/Icons/1x/sign.png'
            alt='Signature'
            className='w-28 lg:w-28 sm:w-16 sm:mx-auto sm:relative '
          />
          <p className='text-white mt-2 text-sm md:text-base sm:text-center sm:mt-3'>
            Singer | Performer
          </p>
        </div>
      </div>

      {/* Arrow Section */}
      <div className='absolute bottom-6  lg:bottom-10 left-1/2 transform -translate-x-1/2'>
        <img
          src='ICONS/Icons/1x/arrow.png'
          alt='Down Arrow'
          className='w-6 h-6 md:w-6 md:h-6'
        />
      </div>
    </div>
  )
}

export default Homepage
