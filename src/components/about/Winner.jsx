import React from 'react';
import Image from 'next/image';

const Winner = () => {
  return (
    <div className='h-screen relative lg:p-10 lg:gap-[10%] lg:flex-row-reverse bg-white lg:flex lg:items-center lg:justify-center'>
      <div className='lg:static lg:h-[80%] lg:w-[30%] h-[30%] w-full flex lg:justify-center items-center justify-around'>
        <Image
          className='w-[50%] lg:w-full'
          src='/home/sare.png'
          alt='Celebrating the Sa Re Ga Ma Pa 2019 victory'
          width={500}
          height={500}
          priority
        />
        <h1 className='lg:hidden text-5xl'>2019</h1>
      </div>

      <div className='pt-10 flex flex-col gap-5 lg:basis-2/3'>
        <h1 className='font-normal text-red lg:text-9xl text-6xl px-8'>
          Winner
        </h1>

        <p className='px-8 lg:text-xl text-justify'>
          A remarkable milestone in the journey of music was being crowned the
          winner of Zee TV’s *Sa Re Ga Ma Pa 2019*. This prestigious victory
          stands as a testament to passion, dedication, and the support of
          everyone who believed in the magic of music.
        </p>

        <p className='px-8 lg:text-xl text-justify'>
          The platform provided unforgettable opportunities to showcase talent
          on a national stage, touching hearts and inspiring aspiring musicians
          across the country. It also paved the way for new beginnings,
          international recognition, and collaborations with industry legends.
        </p>
      </div>
    </div>
  );
};

export default Winner;
