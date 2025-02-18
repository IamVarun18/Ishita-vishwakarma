import React from 'react';
import Link from 'next/link';  // Import Link from next/link
import { BiSolidDownArrow } from 'react-icons/bi';

const Upcoming = () => {
  const upcomingSong = {
    title: 'Ganesh Mantra - Om Gan Ganpataye Namo Namah',
    artist: 'Ft. Ishita Viswakarma',
    releaseDate: '28/06/24',
    platforms: {
      spotify: 'https://open.spotify.com',  // Example link
      appleMusic: 'https://music.apple.com',
      youtube: 'https://www.youtube.com',
    },
  };

  return (
    <div className='h-screen bg-pink bg-no-repeat bg-size flex relative justify-center items-center'>
      <div className='flex flex-col gap-y-14 justify-center items-center'>
        <h1 className='text-center leading-normal lg:text-8xl text-4xl font-light'>
          Recent & Upcoming <br /> Releases <br /> |
        </h1>
        <div className='w-full max-w-2xl bg-white p-4 rounded-lg shadow-lg flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-medium'>{upcomingSong.title}</h2>
            <p className='text-gray-600'>{upcomingSong.artist}</p>
            <p className='text-gray-500'>Releasing on {upcomingSong.releaseDate}</p>
          </div>
          <div className='flex gap-x-2'>
            <Link href={upcomingSong.platforms.spotify}>
              <img src='/ICONS/Icons/1x/spotify.png' alt='Spotify' className='lg:w-8 lg:h-auto w-12' />
            </Link>
            <Link href={upcomingSong.platforms.appleMusic}>
              <img src='/ICONS/Icons/1x/imusic.png' alt='Apple Music' className='lg:w-8 lg:h-auto' />
            </Link>
            <Link href={upcomingSong.platforms.youtube}>
              <img src='/ICONS/Icons/1x/ytcolor.png' alt='YouTube' className='lg:w-12 lg:h-auto' />
            </Link>
          </div>
        </div>
        <div className='absolute bottom-10'>
          <BiSolidDownArrow size={44} />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
