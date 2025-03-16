/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AudioPreview = () => {
  const songs = [
    {
      title: 'Mann Jogiya | Official Song',
      artist: 'Ft. Arijit Singh X Ishita Vishwakarma',
      duration: '4:21',
      releaseDate: '25 Sept 2023',
      spotifyEmbed:
         'https://open.spotify.com/embed/track/1oHCAYOHUIrjBcizvDShgD?utm_source=generator&theme=0'
    },
    {
      title: 'Agle Janam Bhi Mujhko',
      artist: 'Ft. Anu Malik X Ishita Vishwakarma',
      duration: '4:40',
      releaseDate: '27 Nov 2024',
      spotifyEmbed:
        'https://open.spotify.com/embed/track/1Eu2U1MKeKtoh8PHt5JXGS?utm_source=generator&theme=0'
    },
    {
      title: 'Prabhu Govardhan Girdhari',
      artist: 'Ft. Ishita Vishwakarma X Arijit Shrivastav  ',
      duration: '3:45',
      releaseDate: '05/01/24',
      spotifyEmbed:
        'https://open.spotify.com/embed/track/4ftko0dTn32lYxtVcQUhV4?utm_source=generator&theme=0'
    },
    {
      title: 'Radhe Krishna Radhe Krishna',
      artist: 'Ft. Ishita Vishwakarma',
      duration: '44:37',
      releaseDate: '2 Sept 2023',
      spotifyEmbed:
        'https://open.spotify.com/embed/track/0QvaM2IEPdFcrpQtwv97eY?utm_source=generator'
    }
  ]

  return (
    <div className='min-h-screen bg-white'>
      {/* Audio Preview Section */}
      <div className='container mx-auto px-4 py-8 mt-20'>
        <h2 className='text-4xl font-bold text-center mb-8'>
          Audio <span className='text-gray-500'>Preview</span>
        </h2>

        {/* Song Preview Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center'>
          {songs.map((song, index) => (
            <div
              key={index}
              className='bg-pink relative p-6 rounded-lg shadow-md flex flex-col justify-between w-full max-w-sm lg:max-w-md mx-auto'
            >
              {/* Song Details */}
              <h3 className='text-lg font-semibold'>{song.title}</h3>
              <p>{song.artist}</p>
              <div className='flex items-center justify-between'>
                <p className='lg:block hidden'>Duration: {song.duration}</p>
                <p>Released On: {song.releaseDate}</p>
              </div>

              {/* Spotify Embed */}
              <div className=' h-auto translate-y-4'>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={song.spotifyEmbed}
                  width='100%'
                  height='352'
                  frameBorder='0'
                  allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                  loading='lazy'
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AudioPreview

// /* eslint-disable @next/next/no-img-element */
// import React, { useState } from 'react'

// const AudioPreview = () => {
//   const songs = [
//     {
//       title: 'Mann Jogiya | Official Song',
//       artist: 'Ft. Arijit Singh,Ishita Vishwakarma ',
//       duration: '4:21',
//       releaseDate: ' 25 Sept 2023',
//       audioSrc:
//         'https://ik.imagekit.io/zftwymhqf/1.mp3?updatedAt=1736443297841', // Correct path
//       platforms: {
//         spotify: '/ICONS/Icons/1x/spotify.png',
//         appleMusic: '/ICONS/Icons/1x/imusic.png',
//         youtube: '/ICONS/Icons/1x/ytcolor.png'
//       }
//     },
//     {
//       title: 'Agle Janam Bhi Mujhko ',
//       artist: 'Ft. Anu Malik x Ishita Vishwakarma',
//       duration: '3:45',
//       releaseDate: '27 Nov 2024',
//       audioSrc: '/audio/song2.mp3', // Correct path
//       platforms: {
//         spotify: '/ICONS/Icons/1x/spotify.png',
//         appleMusic: '/ICONS/Icons/1x/imusic.png',
//         youtube: '/ICONS/Icons/1x/ytcolor.png'
//       }
//     },
//     {
//       title: 'Aao Gan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       audioSrc: '/audio/song3.mp3', // Correct path
//       platforms: {
//         spotify: '/ICONS/Icons/1x/spotify.png',
//         appleMusic: '/ICONS/Icons/1x/imusic.png',
//         youtube: '/ICONS/Icons/1x/ytcolor.png'
//       }
//     },
//     {
//       title: 'Aao ssssssGan Raja',
//       artist: 'Ft. Ishita Viswakarma',
//       duration: '3:45',
//       releaseDate: '05/01/24',
//       audioSrc: '/audio/1.mp3', // Correct path
//       platforms: {
//         spotify: '/ICONS/Icons/1x/spotify.png',
//         appleMusic: '/ICONS/Icons/1x/imusic.png',
//         youtube: '/ICONS/Icons/1x/ytcolor.png'
//       }
//     }
//   ]

//   const [isPlaying, setIsPlaying] = useState([false, false, false, false]) // For toggling play/pause
//   const audioRefs = songs.map(() => React.createRef()) // Create refs for each audio element

//   const togglePlay = index => {
//     const updatedState = isPlaying.map((item, i) => {
//       if (i === index) {
//         if (!item) {
//           // Play the current song
//           audioRefs[index].current.play()
//         } else {
//           // Pause the current song
//           audioRefs[index].current.pause()
//         }
//         return !item
//       } else {
//         // Pause other songs
//         audioRefs[i].current.pause()
//         return false
//       }
//     })
//     setIsPlaying(updatedState)
//   }

//   return (
//     <div className='min-h-screen bg-white'>
//       {/* Audio Preview Section */}
//       <div className='container mx-auto px-4 py-8 mt-20'>
//         <h2 className='text-4xl font-bold text-center mb-8'>
//           Audio <span className='text-gray-500'>Preview</span>
//         </h2>

//         {/* Song Preview Grid */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center'>
//           {songs.map((song, index) => (
//             <div
//               key={index}
//               className='bg-pink relative p-6 rounded-lg shadow-md flex flex-col justify-between w-full max-w-sm lg:max-w-md mx-auto'
//             >
//               {/* Play/Pause Icon */}
//               <div className='absolute top-4 right-4'>
//                 <button onClick={() => togglePlay(index)}>
//                   {isPlaying[index] ? (
//                     <img src='/ICONS/Icons/1x/pause.png' alt='Pause' />
//                   ) : (
//                     <img src='/ICONS/Icons/1x/play.png' alt='Play' />
//                   )}
//                 </button>
//               </div>

//               {/* Song Details */}
//               <h3 className='text-lg font-semibold'>{song.title}</h3>
//               <p>{song.artist}</p>
//               <div className='flex items-center justify-between'>
//                 <p>Duration: {song.duration}</p>
//                 <p>Released On: {song.releaseDate}</p>
//               </div>

//               <div className='flex items-center justify-start'>
//                 <img
//                   src={song.platforms.spotify}
//                   alt='Spotify'
//                   className='w-6 h-6'
//                 />
//                 <img
//                   src={song.platforms.appleMusic}
//                   alt='Apple Music'
//                   className='w-6 h-6'
//                 />
//                 <img
//                   src={song.platforms.youtube}
//                   alt='YouTube'
//                   className='w-8 h-6'
//                 />
//               </div>

//               {/* Audio Element */}
//               <audio ref={audioRefs[index]} src={song.audioSrc} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AudioPreview
