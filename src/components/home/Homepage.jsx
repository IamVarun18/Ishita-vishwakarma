import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="relative bg-[url('https://ik.imagekit.io/zftwymhqf/main%20images/3e9adc8c-ce74-44f3-8637-be14af95a27c.JPG?updatedAt=1736441505737')] bg-no-repeat bg-center bg-cover h-screen">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Text Section */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-6 md:px-16 text-center md:text-left">
        <div className="bottom-[28%] lg:bottom-0 flex-col items-start flex lg:flex-col lg:relative absolute">
          <h1 className="text-5xl md:text-6xl lg:font-semibold font-semibold text-white">
            Ishita
          </h1>
          <h1 className="text-5xl md:text-6xl lg:font-medium font-extralight text-white">
            Vishwakarma
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-300 max-w-lg">
            Winner Of{' '}
            <span className="font-semibold !text-white">Sa Re Ga Ma Pa</span> | 1st Runner Up{' '}
            <span className="font-semibold !text-white">
              India&apos;s Got Talent
            </span>
          </p>
        </div>
      </div>

      {/* Signature Section */}
      <div className="relative">
        <div className="absolute lg:bottom-20 lg:left-[7%] md:transform md:-translate-x-1/2 md:flex md:flex-col md:items-center bottom-20 left-5">
          <Image
            src="/ICONS/Icons/1x/sign.png"
            alt="Signature"
            width={112}
            height={112}
            className="w-28 lg:w-28 sm:w-16 sm:mx-auto sm:relative"
          />
          <p className="text-white mt-2 text-sm md:text-base sm:text-center sm:mt-3">
            Singer | Performer
          </p>
        </div>
      </div>

      {/* Arrow Section */}
      <div className="absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2">
        <Image
          src="/ICONS/Icons/1x/arrow.png"
          alt="Down Arrow"
          width={24}
          height={24}
          className="w-6 h-6 md:w-6 md:h-6"
        />
      </div>
    </div>
  );
};

export default Homepage;
