import React from 'react';

const MusicMain = () => {
  const musicData = [
    { id: 1, title: 'Ganesh Mantra - Om Gan Ganpataye Namo Namah', artist: 'Ft. Ishita Viswakarma' },
    { id: 2, title: 'Prabhu Govardhan Girdhari', artist: 'Ft. Ishita Viswakarma' },
    { id: 3, title: 'Hanuman Chalisa', artist: 'Ft. Ishita Viswakarma' },
    { id: 4, title: 'Ab Navyug Ki Gangotri Se ( PragyaGeet )', artist: 'Ft. Ishita Viswakarma' },
    { id: 5, title: 'Ram Ke Aane Se | Ayodhya Ram Mandir Anthem', artist: 'Ft. | Samarpit Golani | Ishita Vishwakarma' },
    { id: 6, title: 'Krishna Song | Meera Si Deewani Hogai', artist: 'Ft. Ishita Viswakarma' },
    { id: 7, title: 'Aarti Shri DurgaJi', artist: 'Ft. Ishita Viswakarma' },
    { id: 8, title: 'Radhe Krishna Radhe Krishna Krishna Krishna Radhe Radhe', artist: 'Ft. Ishita Viswakarma' },
  ];
  
  return (
    <div className="lg:py-28 py-28 bg-white">
      <div className="text-center mb-10">
        <h1 className="font-sans text-4xl font-light">
          Trending <span className="font-bold">Music Now</span>
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 px-10 lg:px-20">
        {musicData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 hover:shadow-md transition-shadow duration-300 p-5 flex flex-col items-center text-center w-full h-64"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicMain;
