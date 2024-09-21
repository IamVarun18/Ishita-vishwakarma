

import React from 'react';

const ContactForm = () => {
    return (
        <div className='relative h-screen  flex justify-center items-center'>

            <div className='px-[5%]'>
                <div className='grid grid-cols-2   '>
                    {/* Left section for Business Queries */}
                    <div className='flex flex-col '>
                        <h2 className='text-4xl font-bold text-textpink '>For Business <br />Queries:</h2>
                        <p className='text-lg mt-4'>Let's collaborate and make music together! <br /> Text or email to us at:</p>
                        <p className='mt-4 text-xl font-semibold text-textpink'>Text:</p>
                        <p className='text-lg'>+91 98 76 54 32 10</p>
                        <p className='mt-4 text-xl font-semibold text-textpink'>Mail:</p>
                        <p className='text-lg'>Ishitavishwakarma@gmail.com</p>
                    </div>

                    {/* Right section for Contact Form */}
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-4xl  font-bold text-textpink'>Send Me A
                            <br /> Message:</h2>
                        <p className='text-lg mt-4'>
                            Alternatively, complete this form to provide more details about your project and needs. We will respond promptly. Share the love.
                        </p>

                        {/* Form starts here */}
                        <form className='mt-8 space-y-4'>
                            <div className='grid grid-cols-3 gap-4 text-textpink'>
                                <input
                                    type='text'
                                    placeholder='Your Name'
                                    className='col-span-1 border-none bg-lightpink p-2 border  rounded-lg'
                                />
                                <input
                                    type='email'
                                    placeholder='Your Email'
                                    className='col-span-1 text-pink  border-none bg-lightpink p-2 border  rounded-lg'
                                />
                                <input
                                    type='tel'
                                    placeholder='Your Number'
                                    className='col-span-1 p-2 border-none bg-lightpink border  rounded-lg'
                                />
                            </div>
                            <textarea
                                placeholder='Message'
                                className='w-full p-2 border border-none bg-lightpink  rounded-lg h-32'
                            ></textarea>

                            {/* Recaptcha and submit button */}
                            <div className='flex items-center space-x-4'>
                                <div className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        id='recaptcha'
                                        className='mr-2'
                                    />
                                    <label htmlFor='recaptcha' className='text-lg'>
                                        I'm not a robot
                                    </label>
                                </div>
                                <button
                                    type='submit'
                                    className='bg-red border-none text-white px-6 py-2 rounded-lg'
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className='absolute bottom-0 left-0 w-full text-center py-4'>
                <p className='text-textpink'>
                    Copyright © 2024 All rights reserved by IV
                </p>
            </footer>
        </div>
    );
};

export default ContactForm;
