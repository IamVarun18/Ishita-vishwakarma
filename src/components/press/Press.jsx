import React from 'react'
import Link from 'next/link'

const Press = () => {
  const data = [
    {
      id: 1,
      title: 'Times of India',
      description: "Badshah Weeps as Contestant Sings Lata's Classic",
      semiDescription: " Shilpa Shetty Joins on Stage",
      link: 'https://timesofindia.indiatimes.com/tv/news/hindi/badshah-weeps-after-indias-got-talent-contestant-sings-lata-mangeshkars-tu-jahaan-jaahan-chalega-beautifully-shilpa-shetty-hugs-her-on-stage/articleshow/88867747.cms'
    },
    {
      id: 2,
      title: 'Times of India',
      description: 'Ishita Vishwakarma: ',
      semiDescription: 'Singing for Shah Rukh Khan Was a Dream Come Tru',
      link: 'https://timesofindia.indiatimes.com/videos/tv/hindi/sa-re-ga-ma-pa-winner-ishita-vishwakarma-singing-in-front-of-shah-rukh-khan-was-a-dream-come-true-moment/videoshow/67712363.cms'
    },
    {
      id: 3,
      title: 'India Today',
      description: 'Sa Re Ga Ma Pa winner: Who is Ishita Vishwakarma?',
      semiDescription: ' Lesser-known facts, unseen pics and videos',
      link: 'https://www.indiatoday.in/television/reality-tv/story/sa-re-ga-ma-pa-winner-who-is-ishita-vishwakarma-lesser-known-facts-unseen-pics-and-videos-1440752-2019-01-28'
    },
    {
      id: 4,
      title: 'DNA',
      description: "Watch Sa Re Ga Ma Pa 2018 winner ",
      semiDescription: "Ishita Vishwakarma's 7 best performances",
      link: 'https://www.dnaindia.com/television/photo-gallery-watch-sa-re-ga-ma-pa-2018-winner-ishita-vishwakarma-s-7-best-performances-2712953/ishita-vishwakarma-2712954'
    },
    {
      id: 5,
      title: 'India Today',
      description: '1st Runner of',
      semiDescription: 'India Got Talent',
      link: '/india-today'
    },
    {
      id: 6,
      title: 'India Today',
      description: 'Ishita Release A',
      semiDescription: 'New Devotional Song',
      link: '/ishita-song'
    }
  ]

  return (
    <div className='lg:h-auto py-10'>
      <article className='lg:px-44 px-8 space-y-8'>
        <h1 className='font-sans text-5xl text-center font-light'>
          Press & Release
        </h1>
        <section className='lg:gap-44 flex-col gap-20 flex lg:grid lg:grid-cols-3'>
          {data.map((item) => (
            <div key={item.id} className='relative w-[90%] h-full m-4'>
              {/* Background Card */}
              <section className='absolute inset-y-0 left-0 bg-gray-100 z-0 w-full min-w-[300px] h-full -translate-x-5 -translate-y-4'></section>

              {/* Main Card */}
              <Link target='blank'
                href={item.link}
                className='relative bg-gray-200 hover:bg-pink cursor-pointer transition-all duration-500 shadow-xl border p-8 z-10 flex flex-col justify-center h-full min-w-[300px]'
              >
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
              </Link>
            </div>
          ))}
        </section>
      </article>
    </div>
  )
}

export default Press
