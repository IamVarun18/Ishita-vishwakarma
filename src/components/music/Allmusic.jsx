import React, { useState } from 'react';
import Image from 'next/image'; // Import Image component

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
    // Add other songs here...
  ];

  const [filter, setFilter] = useState('All Music');

  const filteredSongs =
    filter === 'All Music' ? songs : songs.filter(song => song.category === filter);

  const categories = ['All Music', 'Devotional', 'Play Back', 'Original', 'Jazz'];

  return (
    <div className="min-h-screen bg-white flex justify-center items-start mt-16 py-16">
      <div className="w-full lg:max-w-[80vw] max-w-[90vw]">
        {/* Filter Buttons */}
        <div className="mb-10">
          <div className="lg:flex gap-8 lg:w-auto lg:items-start lg:justify-between grid">
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
                    <Image
                      src={icon}
                      alt={platform}
                      width={24} // Specify appropriate width
                      height={24} // Specify appropriate height
                      className="lg:w-6 lg:h-6"
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
