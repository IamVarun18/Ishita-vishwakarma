
const Allmusic = () => {
  const songs = [
    {
      title: "Aao Gan Raja",
      artist: "Ft. Ishita Viswakarma",
      duration: "3:45",
      releaseDate: "05/01/24",
      platforms: {
        spotify: "/path-to-spotify-icon.png", // Replace with the actual path
        appleMusic: "/path-to-applemusic-icon.png",
        youtube: "/path-to-youtube-icon.png",
      },
    },
    {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/path-to-spotify-icon.png", // Replace with the actual path
          appleMusic: "/path-to-applemusic-icon.png",
          youtube: "/path-to-youtube-icon.png",
        },
      },
      {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/path-to-spotify-icon.png", // Replace with the actual path
          appleMusic: "/path-to-applemusic-icon.png",
          youtube: "/path-to-youtube-icon.png",
        },
      },
      {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/path-to-spotify-icon.png", // Replace with the actual path
          appleMusic: "/path-to-applemusic-icon.png",
          youtube: "/path-to-youtube-icon.png",
        },
      },
      {
        title: "Aao Gan Raja",
        artist: "Ft. Ishita Viswakarma",
        duration: "3:45",
        releaseDate: "05/01/24",
        platforms: {
          spotify: "/path-to-spotify-icon.png", // Replace with the actual path
          appleMusic: "/path-to-applemusic-icon.png",
          youtube: "/path-to-youtube-icon.png",
        },
      },
      
     
 
  ];

    return (
        <div className="min-h-screen bg-white flex justify-center items-start mt-16 py-16">
            <div className="w-full max-w-[62vw] mx-auto ">
              
              {/* Filter Buttons */}
              <div className="mb-10">
                <div className="flex items-start justify-between ">
                  <button className="bg-red border-1 border-red text-white text-lg font-semibold py-[9px] px-14 rounded-md">All Music</button>
                  <button className="border-2 border-red text-red text-lg font-semibold py-2 px-14  rounded-md">Vocals</button>
                  <button className="border-2 border-red text-red text-lg font-semibold py-2 px-14  rounded-md">Lyrics</button>
                  <button className="border-2 border-red text-red text-lg font-semibold py-2 px-14  rounded-md">Composition</button>
                  <button className="border-2 border-red text-red text-lg font-semibold py-2 px-14  rounded-md">Vocal Choir</button>
                </div>
              </div>

              {/* Song List */}
              <div className="flex flex-col gap-3">
                {songs.map((song, index) => (
                  <div key={index} className="bg-pink p-4 rounded-md grid grid-cols-10 items-center gap-2">
                    <h3 className="text-lg font-semibold col-span-2">{song.title}</h3>
                    <p className="col-span-2">{song.artist}</p>
                    <p className="col-span-2">Duration: {song.duration}</p>
                    <p className="col-span-2">Released On: {song.releaseDate}</p>
                    <div className="flex space-x-4 col-span-2 justify-end">
                      <img src="/ICONS/Icons/1x/spotify.png" alt="Spotify" className="w-6 h-6" />
                      <img src="/ICONS/Icons/1x/imusic.png" alt="Apple Music" className="w-6 h-6" />
                      <img src="/ICONS/Icons/1x/ytcolor.png" alt="YouTube" className="w-8 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    );
};

export default Allmusic;
