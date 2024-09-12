import React from 'react';

const Musiclib = () => {
    return (
        <div className='relative h-screen px-[10%] gap-x-40 flex justify-center items-center'>
            <div className='basis-1/3 rounded-[10%] h-[40%] bg-pink  flex flex-col justify-center items-center gap-3'>
                <h1 className='text-8xl font-semibold  text-red'>42+</h1>
                <h1 className='text-3xl'>Songs Released</h1>
                <h1 className=' text-red'> ---------- </h1>
            </div>
            <div className='basis-1/3 rounded-[10%] h-[40%]  bg-pink  flex flex-col justify-center items-center gap-3'>
                <h1 className='text-8xl font-semibold text-red'>35+</h1>
                <h1 className='text-3xl'>Awards Earned</h1>
                <h1 className=' text-red'> ---------- </h1>
            </div>
            <div className='basis-1/3 rounded-[10%] h-[40%]   bg-pink   flex flex-col justify-center items-center gap-3'>
                <h1 className='text-8xl font-semibold  text-red'>6+</h1>
                <h1 className='text-3xl'>Reality Shows</h1>
                <h1 className=' text-red'> ---------- </h1>
            </div>
            <button className='absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-xl bg-red px-5 py-3 text-xl text-white'>
                Open Music Library
            </button>
        </div>
    );
};

export default Musiclib;








