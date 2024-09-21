/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

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
      <div className="container mx-auto px-4 py-8 mt-20">
        <h2 className="text-4xl font-bold text-center mb-8">
          Audio <span className="text-gray-500">Preview</span>
        </h2>

        {/* Song Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center ">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-pink p-6 rounded-lg shadow-md flex flex-col justify-between w-full max-w-sm lg:max-w-md mx-auto"
            >
              {/* Play/Pause Icon */}
              <div className="absolute top-4 right-4">
                <button onClick={() => togglePlay(index)}>
                  {isPlaying[index] ? (
                    <img src="/ICONS/Icons/1x/pause.png" alt="Pause" />
                  ) : (
                    <img src="/ICONS/Icons/1x/play.png" alt="Play" />
                  )}
                </button>
              </div>

              {/* Song Details */}
              <h3 className="text-lg font-semibold">{song.title}</h3>
              <p>{song.artist}</p>
             <div className="flex items-center justify-between">
             <p>Duration: {song.duration}</p>
             <p>Released On: {song.releaseDate}</p>
             </div>

              <div className="flex items-center justify-start">
                <img
                  src="/ICONS/Icons/1x/spotify.png"
                  alt="Spotify"
                  className="w-6 h-6"
                />
                <img
                  src="/ICONS/Icons/1x/imusic.png"
                  alt="Apple Music"
                  className="w-6 h-6"
                />
                <img
                  src="/ICONS/Icons/1x/ytcolor.png"
                  alt="YouTube"
                  className="w-8 h-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPreview;
