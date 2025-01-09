const AboutMe = () => {
  return (
    <div className='h-screen  translate-y-14 w-full flex justify-center lg:items-center overflow-hidden'>
      <div className='relative lg:top-0 translate-y-8 w-[90%] h-screen lg:w-[80%] lg:h-[75%] flex lg:flex-row flex-wrap justify-center items-center lg:justify-normal lg:items-start'>
        <div className='h-[35vh] w-[35vh] lg:h-[90%] relative flex justify-center lg:flex lg:flex-auto lg:justify-normal'>
          <div className='lg:h-[90%] h-[95%] lg:w-auto w-[85%] absolute lg:bottom-5 lg:translate-x-0 lg:translate-y-0 translate-x-7 translate-y-8 lg:left-20'
          style={{
              backgroundImage:
                "url('https://ik.imagekit.io/zftwymhqf/main%20images/be9d0eee-e073-45e4-a280-b142b098bb4c.JPG?updatedAt=1736441525552')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            ></div>
          <div
            className='lg:h-[90%] h-[95%] lg:w-auto w-[85%] lg:top-0 top-0 absolute drop-shadow-xl shadow-2xl bg-auto'
            style={{
              backgroundImage:
                "url('https://ik.imagekit.io/zftwymhqf/main%20images/6d7bd81f-8075-4590-a36e-273ff5d47da2.JPG?updatedAt=1736441513591",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
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
