
const Musiclib = () => {
    return (
        <div className="relative h-screen bg-[url('https://images.unsplash.com/photo-1606219411833-8abd2f112b50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center px-[10%] gap-x-40 flex justify-center items-center">
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








