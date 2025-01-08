import React from 'react';
import Image from 'next/image'; // Import the Image component

const Winner = () => {
  return (
    <div className='h-screen relative lg:p-10 lg:gap-[10%] lg:flex-row-reverse bg-white lg:flex lg:items-center lg:justify-center'>
      <div className='lg:static lg:h-[80%] lg:w-[30%] h-[30%] w-full flex lg:justify-center items-center justify-around'>
        {/* Replace <img> with <Image> */}
        <Image
          className='w-[50%] lg:w-full'
          src='/home/sare.png'
          alt='Winner 2019'
          width={500} // Specify the width
          height={500} // Specify the height
          priority // Optional: loads the image eagerly for better LCP
        />
        <h1 className='lg:hidden text-5xl'>2019</h1>
      </div>

      <div className='pt-10 flex flex-col gap-5 lg:basis-2/3'>
        <h1 className='font-normal text-red lg:text-9xl text-6xl px-8'>
          Winner
        </h1>

        <p className='px-8 lg:text-xl text-justify'>
          Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
          nonummy nibh euismod tinci dunt ut laoreet dolore magna aliquam erat
          volut pat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat.
        </p>

        <p className='px-8 lg:text-xl text-justify'>
          Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
          nonummy nibh euismod tinci dunt ut laoreet dolore magna aliquam erat
          volut pat.
        </p>
      </div>
    </div>
  );
};

export default Winner;
