const Homepage = () => {
  return (
    <div className="relative bg-[url('/home/3.jpg')] bg-no-repeat bg-center bg-cover h-screen">
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 md:p-16">
        <h1 className="text-6xl font-bold text-white">Ishita Vishwakarma</h1>
        <p className="mt-4 text-lg text-white max-w-lg">
       
          Winner Of <span className="font-semibold">Sa Re Ga Ma Pa</span> | 1st Runner Up <span className="font-semibold">`India's Got Talent`</span>
        </p>
      </div>
    </div>
  );
};

export default Homepage;

