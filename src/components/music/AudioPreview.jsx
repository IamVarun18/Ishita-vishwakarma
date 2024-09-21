import React, { useState } from 'react';
import Image from 'next/image';

const AudioPreview = () => {
  const [isPlaying, setIsPlaying] = useState([false, false, false, false]); // For toggling play/pause

  const songs = [
    {
      title: "Aao Gan Raja",
      artist: "Ft. Ishita Viswakarma",
      duration: "3:45",
      releaseDate: "05/01/24",
      platforms: {
        spotify: "/spotify-icon.png", // Replace with actual icon paths
        appleMusic: "/applemusic-icon.png",
        youtube: "/youtube-icon.png",
      },
    },
    {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/spotify-icon.png", // Replace with actual icon paths
          appleMusic: "/applemusic-icon.png",
          youtube: "/youtube-icon.png",
        },
      },
      {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/spotify-icon.png", // Replace with actual icon paths
          appleMusic: "/applemusic-icon.png",
          youtube: "/youtube-icon.png",
        },
      },
      {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/spotify-icon.png", // Replace with actual icon paths
          appleMusic: "/applemusic-icon.png",
          youtube: "/youtube-icon.png",
        },
      },
  ];

  const togglePlay = (index) => {
    const updatedState = isPlaying.map((item, i) => (i === index ? !item : item));
    setIsPlaying(updatedState);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Audio Preview Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">
          Audio <span className="text-gray-500">Preview</span>
        </h2>

        {/* Song Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((song, index) => (
            <div key={index} className="bg-red-100 p-6 rounded-lg relative">
                
              {/* Play/Pause Icon */}
              <div className="absolute top-4 right-4">
                <button onClick={() => togglePlay(index)}>
                  {isPlaying[index] ? (
                    <i className="fas fa-pause-circle text-3xl"></i>
                  ) : (
                    <i className="fas fa-play-circle text-3xl"></i>
                  )}
                </button>
              </div>

              {/* Song Details */}
              <h3 className="text-lg font-semibold">{song.title}</h3>
              <p>{song.artist}</p>
              <p>Duration: {song.duration}</p>
              <p>Released On: {song.releaseDate}</p>

              <div className="flex space-x-4 mt-4">
                <Image src={song.platforms.appleMusic} alt="Spotify" width={30} height={30} />
                <Image src={song.platforms.appleMusic} alt="Apple Music" width={30} height={30} />
                <Image src={song.platforms.youtube} alt="YouTube" width={30} height={30} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPreview;
