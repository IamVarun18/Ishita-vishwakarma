const AboutMe = () => {
  return (
    <div className='h-screen   w-full flex justify-center lg:items-center overflow-hidden'>
      <div className='relative lg:top-0 translate-y-8 w-[90%] h-screen lg:w-[80%] lg:h-[75%] flex lg:flex-row flex-wrap justify-center items-center lg:justify-normal lg:items-start'>
        <div className='h-[35vh] w-[35vh] lg:h-[90%] relative flex justify-center lg:flex lg:flex-auto lg:justify-normal'>
          <img
            className='lg:h-[90%] h-[95%] lg:w-auto w-[85%] absolute lg:bottom-5 lg:translate-x-0 lg:translate-y-0 translate-x-7 translate-y-8 lg:left-20'
            src='https://images.unsplash.com/photo-1630312874843-53f1295ae463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGNhcmR8ZW58MHx8MHx8fDA%3D'
            alt=''
          />
          <img
            className='lg:h-[90%] h-[95%] lg:w-auto w-[85%] lg:top-0 top-0 absolute drop-shadow-xl shadow-2xl'
            src='https://images.unsplash.com/photo-1630312874843-53f1295ae463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGNhcmR8ZW58MHx8MHx8fDA%3D'
            alt=''
          />
        </div>
        <div className='lg:translate-y-0 translate-y-6 relative w-100vw lg:relative flex flex-col gap-5 lg:basis-2/3 align-middle items-center lg:items-start h-[100%]'>
          <h1 className='lg:font-normal translate-y-4 lg:translate-y-0 text-red text-5xl lg:text-8xl lg:px-8'>
            About Me
          </h1>

          <p className='lg:px-8 px-2 text-sm translate-y-2 flex text-justify'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat.
          </p>

          <p className='lg:px-8 px-2 text-sm translate-y-2 flex text-justify'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat
          </p>

          <h6 className='px-8'>-ishita Vishwakarma</h6>
          <h6 className='px-8'>learn more</h6>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
