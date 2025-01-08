/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const AudioPreview = () => {
  const songs = [
    {
      title: "Aao Gan Raja",
      artist: "Ft. Ishita Viswakarma",
      duration: "3:45",
      releaseDate: "05/01/24",
      audioSrc: "/audio/song1.mp3", // Correct path
      platforms: {
        spotify: "/ICONS/Icons/1x/spotify.png",
        appleMusic: "/ICONS/Icons/1x/imusic.png",
        youtube: "/ICONS/Icons/1x/ytcolor.png",
      },
    },
    {
      title: "Aao Gan Raja",
      artist: "Ft. Ishita Viswakarma",
      duration: "3:45",
      releaseDate: "05/01/24",
      audioSrc: "/audio/song2.mp3", // Correct path
      platforms: {
        spotify: "/ICONS/Icons/1x/spotify.png",
        appleMusic: "/ICONS/Icons/1x/imusic.png",
        youtube: "/ICONS/Icons/1x/ytcolor.png",
      },
    },
    {
      title: "Aao Gan Raja",
      artist: "Ft. Ishita Viswakarma",
      duration: "3:45",
      releaseDate: "05/01/24",
      audioSrc: "/audio/song3.mp3", // Correct path
      platforms: {
        spotify: "/ICONS/Icons/1x/spotify.png",
        appleMusic: "/ICONS/Icons/1x/imusic.png",
        youtube: "/ICONS/Icons/1x/ytcolor.png",
      },
    },
    {
      title: "Aao ssssssGan Raja",
      artist: "Ft. Ishita Viswakarma",
      duration: "3:45",
      releaseDate: "05/01/24",
      audioSrc: "/audio/1.mp3", // Correct path
      platforms: {
        spotify: "/ICONS/Icons/1x/spotify.png",
        appleMusic: "/ICONS/Icons/1x/imusic.png",
        youtube: "/ICONS/Icons/1x/ytcolor.png",
      },
    },
  ];

  const [isPlaying, setIsPlaying] = useState([false, false, false, false]); // For toggling play/pause
  const audioRefs = songs.map(() => React.createRef()); // Create refs for each audio element

  const togglePlay = (index) => {
    const updatedState = isPlaying.map((item, i) => {
      if (i === index) {
        if (!item) {
          // Play the current song
          audioRefs[index].current.play();
        } else {
          // Pause the current song
          audioRefs[index].current.pause();
        }
        return !item;
      } else {
        // Pause other songs
        audioRefs[i].current.pause();
        return false;
      }
    });
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
          {songs.map((song, index) => (
            <div
              key={index}
              className="bg-pink relative p-6 rounded-lg shadow-md flex flex-col justify-between w-full max-w-sm lg:max-w-md mx-auto"
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
                  src={song.platforms.spotify}
                  alt="Spotify"
                  className="w-6 h-6"
                />
                <img
                  src={song.platforms.appleMusic}
                  alt="Apple Music"
                  className="w-6 h-6"
                />
                <img
                  src={song.platforms.youtube}
                  alt="YouTube"
                  className="w-8 h-6"
                />
              </div>

              {/* Audio Element */}
              <audio ref={audioRefs[index]} src={song.audioSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPreview;
