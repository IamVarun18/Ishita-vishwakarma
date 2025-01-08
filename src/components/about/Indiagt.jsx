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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ducimus,
          quia itaque ullam, dolorum facere soluta vel enim dicta consequatur
          nesciunt molestiae culpa. Itaque nostrum error praesentium, libero
          nisi incidunt suscipit at consequatur mollitia sunt ullam expedita
          delectus eum perferendis quos molestiae enim quidem pariatur laborum
          sint magni similique illo!
        </p>

        <p className='px-8 lg:text-xl text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eaque distinctio, quas eligendi, accusantium neque temporibus numquam
          esse quo ratione possimus delectus libero ducimus eum odio fuga magnam
          aperiam ex! Ad distinctio ipsa at cupiditate omnis ipsam ratione.
        </p>
      </div>
    </div>
  );
};

export default Indiagt;
