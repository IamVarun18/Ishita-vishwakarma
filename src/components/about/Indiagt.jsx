import React from 'react';
import Image from 'next/image'; // Import the Image component

const Indiagt = () => {
  return (
    <div className='h-screen relative lg:p-10 lg:gap-[10%] lg:flex-row-reverse bg-white lg:flex lg:items-center lg:justify-center'>
      <div className='lg:static lg:h-[80%] lg:w-[30%] h-[30%] w-full flex lg:justify-center items-center justify-around'>
        {/* Replace <img> with <Image> */}
        <Image
          className='w-[70%] lg:w-full'
          src='/home/IGT_Logo.png'
          alt='IGT Logo'
          width={500} // Specify width
          height={500} // Specify height
          priority // Optional: loads the image eagerly for better LCP
        />
      </div>

      <div className='pt-10 flex flex-col gap-5 lg:basis-2/3'>
        <h1 className='font-normal text-red lg:text-9xl text-6xl px-8'>
          1st Runner Up
        </h1>

        <p className='px-8 lg:text-xl text-justify'>
          Securing the position of 1st Runner Up on Sony TV's *India's Got
          Talent 2022* was an incredible moment of pride and fulfillment. This
          achievement reflected not just talent, but also the passion to
          connect with audiences on a grand scale.
        </p>

        <p className='px-8 lg:text-xl text-justify'>
          Performing on one of the country's most prestigious stages and
          earning accolades from celebrated judges was an unforgettable
          experience. It further solidified a commitment to excellence and the
          power of music to inspire and move hearts across India.
        </p>
      </div>
    </div>
  );
};

export default Indiagt;
