const Musiclib = () => {
  return (
    <div
      className="relative h-screen w-screen bg-[url('https://images.unsplash.com/photo-1606219411833-8abd2f112b50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center px-[10%] lg:gap-x-40 flex 
     lg:flex-row flex-col justify-center lg:items-center gap-y-20"
    >
      <div className='lg:basis-1/3 rounded-[10%] w-[50vw] h-[22vh] lg:h-[40%] bg-pink flex flex-col justify-center items-center lg:gap-3'>
        <h1 className='lg:text-8xl text-6xl font-semibold text-red'>42+</h1>
        <h1 className='lg:text-3xl text-2xl'>Songs Released</h1>
        <h1 className='text-red'> ---------- </h1>
      </div>
      <div className='lg:basis-1/3 rounded-[10%] w-[50vw] h-[22vh] lg:h-[40%] bg-pink flex flex-col justify-center items-center gap-3'>
        <h1 className='lg:text-8xl text-6xl font-semibold text-red'>35+</h1>
        <h1 className='lg:text-3xl text-2xl'>Awards Earned</h1>
        <h1 className='text-red'> ---------- </h1>
      </div>
      <div className='lg:basis-1/3 rounded-[10%] w-[50vw] h-[22vh] lg:h-[40%] bg-pink flex flex-col justify-center items-center gap-3'>
        <h1 className='lg:text-8xl text-6xl font-semibold text-red'>6+</h1>
        <h1 className='lg:text-3xl text-2xl'>Reality Shows</h1>
        <h1 className='text-red'> ---------- </h1>
      </div>
      <button className='hidden lg:block lg:absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-xl bg-red px-5 py-3 text-xl text-white'>
        Open Music Library
      </button>
    </div>
  )
}

export default Musiclib
