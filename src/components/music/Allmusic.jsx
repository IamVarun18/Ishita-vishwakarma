import React, { useState } from 'react';

const AllMusic = () => {
  const songs = [
    {
      title: 'Ganesh Mantra - Om Gan Ganpataye Namo Namah',
      artist: 'Ft. Ishita Viswakarma',
      duration: '6:41',
      releaseDate: '28/06/24',
      category: 'Devotional',
      platforms: {
        spotify: {
          icon: '/ICONS/Icons/1x/spotify.png',
          url: 'https://open.spotify.com/artist/2oaus66w5EZnNJo22QGq8Z?si=iuLQCNZRTsaHEjccN3xGDw'
        },
        appleMusic: {
          icon: '/ICONS/Icons/1x/imusic.png',
          url: 'https://www.apple.com/in/search/ishita-vishwakarma?src=globalnav'
        },
        youtube: {
          icon: '/ICONS/Icons/1x/ytcolor.png',
          url: 'https://www.youtube.com/embed/X06Z8IW_jCg?si=UK27PkDeDBJFkZ8Q'
        }
      }
    },
    {
      title: 'Prabhu Govardhan Girdhari',
      artist: 'Ft. Ishita Viswakarma',
      duration: '6:41',
      releaseDate: '08/11/23',
      category: 'Devotional',
      platforms: {
        spotify: {
          icon: '/ICONS/Icons/1x/spotify.png',
          url: 'https://open.spotify.com/track/4ftko0dTn32lYxtVcQUhV4?si=28fc6646584346a2'
        },
        appleMusic: {
          icon: '/ICONS/Icons/1x/imusic.png',
          url: 'https://music.apple.com/in/album/prabhu-govardhan-girdhari-single/1715642027'
        },
        youtube: {
          icon: '/ICONS/Icons/1x/ytcolor.png',
          url: 'https://www.youtube.com/embed/tumbfI7scCU?si=-ULg-5llBdqGYVRM'
        }
      }
    },
    {
      title: 'Hanuman Chalisa',
      artist: 'Ft. Ishita Viswakarma',
      duration: '6:41',
      releaseDate: '06/04/22',
      category: 'Devotional',
      platforms: {
        spotify: {
          icon: '/ICONS/Icons/1x/spotify.png',
          url: 'https://open.spotify.com/track/4ftko0dTn32lYxtVcQUhV4?si=28fc6646584346a2'
        },
        appleMusic: {
          icon: '/ICONS/Icons/1x/imusic.png',
          url: 'https://music.apple.com/in/album/prabhu-govardhan-girdhari-single/1715642027'
        },
        youtube: {
          icon: '/ICONS/Icons/1x/ytcolor.png',
          url: 'https://www.youtube.com/embed/Qya5cZBZNRI?si=oQ8-VfC-TONhozQi'
        }
      }
    },

    {
      title: 'Play Back Symphony',
      artist: 'John Doe',
      duration: '4:20',
      releaseDate: '01/12/23',
      category: 'Play Back',
      platforms: {
        spotify: {
          icon: '/ICONS/Icons/1x/spotify.png',
          url: 'https://open.spotify.com/track/example2'
        },
        appleMusic: {
          icon: '/ICONS/Icons/1x/imusic.png',
          url: 'https://music.apple.com/example2'
        },
        youtube: {
          icon: '/ICONS/Icons/1x/ytcolor.png',
          url: 'https://youtube.com/example2',
          
        }
      }
    }
  ];

  const [filter, setFilter] = useState('All Music');

  const filteredSongs =
    filter === 'All Music' ? songs : songs.filter(song => song.category === filter);

  const categories = ['All Music', 'Devotional', 'Play Back', 'Original', 'Jazz'];

  return (
    <div className="min-h-screen bg-white flex justify-center items-start mt-16 py-16">
      <div className="w-full lg:max-w-[80vw]  max-w-[90vw] ">
        {/* Filter Buttons */}
        <div className="mb-10 ">
          <div className="lg:flex gap-8 lg:w-auto   lg:items-start lg:justify-between grid">
            {categories.map(category => (
              <button
                key={category}
                className={`py-2 w-full px-6 rounded-md font-semibold text-base ${
                  filter === category ? 'bg-red text-white' : 'border border-red text-red'
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Song List */}
        <div className="flex flex-col gap-4">
          {filteredSongs.map((song, index) => (
            <div
              key={index}
              className="bg-pink p-4 rounded-md grid lg:grid-cols-10 grid-cols-8 gap-4 items-center"
            >
              <h3 className="lg:col-span-2 col-span-4 text-lg font-semibold">{song.title}</h3>
              <p className="lg:col-span-2 hidden lg:block text-sm">{song.artist}</p>
              <p className="lg:col-span-2 hidden lg:block text-sm">Duration: {song.duration}</p>
              <p className="lg:col-span-2 hidden lg:block text-sm">Released On: {song.releaseDate}</p>
              <div className="lg:col-span-2 col-span-4 flex justify-end gap-4">
                {Object.entries(song.platforms).map(([platform, { icon, url }]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon}
                      alt={platform}
                      className="w-8 h-8 lg:w-6 lg:h-6"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMusic;


























// const Allmusic = () => {
//   const songs = [
//     {
//       title: 'Aao Gan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       platforms: {
//         spotify: '/path-to-spotify-icon.png', // Replace with the actual path
//         appleMusic: '/path-to-applemusic-icon.png',
//         youtube: '/path-to-youtube-icon.png'
//       }
//     },
//     {
//       title: 'Aao Gan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       platforms: {
//         spotify: '/path-to-spotify-icon.png', // Replace with the actual path
//         appleMusic: '/path-to-applemusic-icon.png',
//         youtube: '/path-to-youtube-icon.png'
//       }
//     },
//     {
//       title: 'Aao Gan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       platforms: {
//         spotify: '/path-to-spotify-icon.png', // Replace with the actual path
//         appleMusic: '/path-to-applemusic-icon.png',
//         youtube: '/path-to-youtube-icon.png'
//       }
//     },
//     {
//       title: 'Aao Gan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       platforms: {
//         spotify: '/path-to-spotify-icon.png', // Replace with the actual path
//         appleMusic: '/path-to-applemusic-icon.png',
//         youtube: '/path-to-youtube-icon.png'
//       }
//     },
//     {
//       title: 'Aao Gan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       platforms: {
//         spotify: '/path-to-spotify-icon.png', // Replace with the actual path
//         appleMusic: '/path-to-applemusic-icon.png',
//         youtube: '/path-to-youtube-icon.png'
//       }
//     }
//   ]

//   return (
//     <div className='min-h-screen bg-white flex justify-center items-start mt-16 py-16'>
//       <div className='w-full lg:max-w-[62vw] max-w-[90vw] mx-auto '>
//         {/* Filter Buttons */}
//         <div className='mb-10'>
//           <div className='lg:flex gap-8 lg:w-auto  border-2 lg:items-start lg:justify-between grid '>
//             <button className='bg-red border-1 border-red text-white text-base font-semibold py-[9px] px-14 rounded-md'>
//               All Music
//             </button>
//             <button className='border-2 border-red text-red text-base font-semibold py-2 px-14  rounded-md'>
//               Devotional
//             </button>
//             <button className='border-2 border-red text-red text-base font-semibold py-2 px-14  rounded-md'>
//               Play Back
//             </button>
//             <button className='border-2 border-red text-red text-base font-semibold py-2 px-14  rounded-md'>
//               Original
//             </button>
//             <button className='border-2 border-red text-red text-base font-semibold py-2 px-14  rounded-md'>
//               Jazz
//             </button>
//           </div>
//         </div>

//         {/* Song List */}
//         <div className='flex flex-col gap-3'>
//           {songs.map((song, index) => (
//             <div
//               key={index}
//               className='bg-pink p-4 rounded-md grid lg:grid-cols-10  grid-cols-8 gap-5 align-middle  items-center lg:gap-2'
//             >
//               <h3 className='lg:text-base text-xl font-semibold lg:col-span-2 col-span-4'>
//                 {song.title}
//               </h3>
//               <p className='lg:col-span-2  text-sm hidden lg:block '>
//                 {song.artist}
//               </p>
//               <p className='col-span-2 lg:block hidden'>
//                 Duration: {song.duration}
//               </p>
//               <p className='lg:col-span-2  lg:block hidden'>
//                 Released On: {song.releaseDate}
//               </p>
//               <div
//                 className='flex space-x-4 lg:items-end lg:col-span-2 col-span-4  lg:justify-center border-2 
//              justify-end '
//               >
//                 <img
//                   src='/ICONS/Icons/1x/spotify.png'
//                   alt='Spotify'
//                   className='lg:w-6 w-10 lg:h-6'
//                 />
//                 <img
//                   src='/ICONS/Icons/1x/imusic.png'
//                   alt='Apple Music'
//                   className='lg:w-6 w-10 lg:h-6'
//                 />
//                 <img
//                   src='/ICONS/Icons/1x/ytcolor.png'
//                   alt='YouTube'
//                   className='lg:w-6 w-10  lg:h-6'
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Allmusic