import Image from 'next/image';

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
    <div className="min-h-screen bg-white mx-auto w">


      {/* Filter Buttons */}
      <div className="container mx-auto w-full py-16   mt-20">
        <div className="flex justify-center  px-4 mb-10 mx-auto">
          <button className="bg-red text-white text-lg font-semibold py-2 px-6 rounded-sm">All Music</button>
          <button className="border border-red text-red text-lg font-semibold py-2 px-6 rounded-sm">Vocals</button>
          <button className="border border-red text-red text-lg font-semibold py-2 px-6 rounded-sm">Lyrics</button>
          <button className="border border-red text-red  text-lg font-semibold py-2 px-6 rounded-sm">Composition</button>
          <button className="border border-red text-red text-lg font-semibold py-2 px-6 rounded-sm">Vocal Choir</button>
        </div>

        {/* Song List */}
        <div className="space-y-4 ">
      {songs.map((song, index) => (
    // Song Card
    <div key={index} className="bg-pink p-4 rounded-md grid grid-cols-5 items-center gap-4">
      
    <h3 className="text-lg font-semibold col-span-1">{song.title}</h3>
      <p className="col-span-1">{song.artist}</p>
      <p className="col-span-1">Duration: {song.duration}</p>
      <p className="col-span-1">Released On: {song.releaseDate}</p>
      <div className="flex space-x-4 col-span-1 justify-end">
        <Image src={song.platforms.spotify} alt="Spotify" width={30} height={30} />
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

export default Allmusic;
