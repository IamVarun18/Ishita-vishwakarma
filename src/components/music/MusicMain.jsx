import React from 'react';

const MusicMain = () => {
  const musicData = [
    { id: 1, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 2, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 3, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 4, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 5, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 6, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 7, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },
    { id: 8, title: 'Aao Gan Raja', artist: 'Ft. Ishita Viswakarma' },

  ];
  

  return (
    <div className="py-10 bg-white">
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
            {/* Placeholder for Image */}
            {/* <div className="w-full h-48 bg-gray-200 mb-4"></div> */}
            {/* Title and Artist */}
            <h2 className="text-lg  font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicMain;
