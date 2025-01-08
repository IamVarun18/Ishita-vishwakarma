import React from 'react'

const Press = () => {
  const data = [
    {
      id: 1,
      title: 'Times of India',
      description: 'Winner of',
      semiDescription: 'SA RE GA MA PA 2019'
    },
    {
      id: 2,
      title: 'India Today',
      description: '1st Runner of',
      semiDescription: 'India Got Talent'
    },
    {
      id: 3,
      title: 'India Today',
      description: 'Ishita Release A',
      semiDescription: 'New Devotional Song'
    },
    {
      id: 4,
      title: 'Times of India',
      description: 'Winner of',
      semiDescription: 'SA RE GA MA PA 2019'
    },
    {
      id: 5,
      title: 'India Today',
      description: '1st Runner of',
      semiDescription: 'India Got Talent'
    },
    {
      id: 6,
      title: 'India Today',
      description: 'Ishita Release A',
      semiDescription: 'New Devotional Song'
    }
  ]

  return (
    <div className='lg:h-auto  py-10'>
      <article className='lg:px-44 px-8  space-y-8 '>
        <h1 className='font-sans text-5xl text-center font-light'>
          Press & Release
        </h1>
        <section className=' lg:gap-44 flex-col gap-20 flex  lg:grid lg:grid-cols-3'>
          {data.map((item, index) => (
            <div key={index} className='relative w-[90%] h-full m-4'>
              {/* Background Card */}
              <section className='absolute inset-y-0 left-0 bg-gray-100 z-0 w-full  min-w-[300px] h-full -translate-x-5 -translate-y-4'></section>

              {/* Main Card */}
              <section className='relative bg-gray-200 hover:bg-pink cursor-pointer transition-all duration-500 shadow-xl border p-8 z-10 flex flex-col justify-center h-full min-w-[300px]'>
                <aside className='flex flex-col gap-20'>
                  <h1 className='text-2xl font-medium font-serif text-center'>
                    {item.title}
                  </h1>
                  <div>
                    <p className='text-center text-lg font-medium'>
                      {item.description}
                    </p>
                    <p className='text-center text-lg font-medium'>
                      {item.semiDescription}
                    </p>
                  </div>
                </aside>
              </section>
            </div>
          ))}
        </section>
      </article>
    </div>
  )
}

export default Press
