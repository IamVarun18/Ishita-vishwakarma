import React from 'react'

const PressHome = () => {
    return (
        <div className='h-screen bg-pink flex justify-center items-end  '>

            <div className='h-[75%] gap-[15%] flex flex-col justify-center   w-[45%]    '>
                <h1 className=' text-9xl font-semibold text-red'>Press & <br />
                    Release</h1>
                <h4 className=' text-3xl text-red'>
                    Explore
                </h4>
            </div>

            <div className='h-[75%] w-[45%] flex gap-3 justify-center items-center    '>

                <div className='h-[80%] w-[33%] bg-[#EAEAEA] shadow-2xl  '></div>
                <div className='h-[80%] w-[33%] bg-[#EAEAEA]  shadow-2xl  '></div>
                <div className='h-[80%] w-[33%] bg-[#EAEAEA]  shadow-2xl  '></div>
            </div>

        </div>
    )
}

export default PressHome