import Link from 'next/link'

const AboutMe = () => {
  return (
    <div className='lg:h-screen h-[160vh] w-full flex justify-center lg:items-center overflow-hidden'>
      <div className='relative lg:top-0 translate-y-8 w-[90%] h-screen lg:w-[80%] lg:h-[75%] flex lg:flex-row flex-wrap justify-center items-center lg:justify-normal lg:items-start'>
        <div className='h-[35vh] w-[35vh] lg:h-[90%] relative flex justify-center lg:flex lg:flex-auto lg:justify-normal'>
          {/* Unsplash Image (Partially Visible in Background)
          <img
            className='lg:h-[90%] h-[95%] lg:w-auto w-[85%] absolute lg:bottom-5 lg:translate-x-0 lg:translate-y-0 translate-x-7 translate-y-8 lg:left-20 z-0'
            src='https://images.unsplash.com/photo-1630312874843-53f1295ae463?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlZCUyMGNhcmR8ZW58MHx8MHx8fDA%3D'
            alt=''
          /> */}

          {/* Main Image (Covers but Overlaps, allowing the first image to peek) */}
          <div className='absolute lg:inset-y-10 lg:inset-x-[-70px] w-full h-full overflow-hidden z-10'>
            <img
              className='w-full h-full object-cover relative lg:translate-x-6 lg:translate-y-6   drop-shadow-xl'
              src='https://ik.imagekit.io/zftwymhqf/main%20images/IMG_0549.JPG?updatedAt=1736441531809'
              alt=''
            />
          </div>
        </div>

        <div className='lg:translate-y-0 translate-y-6 relative w-100vw lg:relative flex flex-col gap-5 lg:basis-2/3 align-middle items-center lg:items-start lg:h-[100%] '>
          <h1 className='lg:font-normal translate-y-4 lg:translate-y-0 text-red text-5xl lg:text-8xl lg:px-8'>
            About Me
          </h1>

          <p className='lg:px-8 px-2 text-2xl translate-y-2 flex text-justify'>
            Hey there, Music lovers! 🎶 Welcome to my orld, where every note
            tells a story and every melody connects hearts. I'm Ishita
            Vishwakarma, the proud winner of Zee TV's Sa Re Ga Ma Pa 2019, and
            they call me 'Chhoti Lata Ji' for my love of timeless classics. From
            sharing stages across the world to collaborating with legends, my
            journey is all about music, passion, and emotions.
          </p>

          <p className='lg:px-8 px-2 text-xlm translate-y-2 flex text-justify'>
            My musical path has led me to incredible milestones—from
            collaborating with Arijit Singh on Pyar Hai Toh Hai (2023) to being
            honored as the Brand Ambassador of Lado Abhiyan and receiving the
            esteemed DHRUV Tara Award. But beyond the accolades, music is my way
            of touching souls and uniting hearts across borders. I feel truly
            blessed to share my voice with the world and continue this beautiful
            journey of melodies and emotions.
          </p>

          <p className='lg:px-8 px-2 text-xlm translate-y-2 flex text-justify'>
            So, come along—let's lose ourselves in the magic of music together!
          </p>

          {/* <h6 className='px-8'>- Ishita Vishwakarma</h6> */}

          {/* Corrected Link */}
          <Link href='/about'>
            <h6 className='px-8 cursor-pointer  underline'>Learn more</h6>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
