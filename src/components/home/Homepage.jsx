const Homepage = () => {
  return (
    <div className="relative bg-[url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover h-screen">
    
      <div className="relative z-10 flex flex-col items-start justify-center h-full p-6 md:p-16">
        <h1 className="text-6xl font-semibold text-white">Ishita</h1>
        <h1 className="text-6xl font-medium text-white"> Vishwakarma</h1>

        <p className="mt-4 text-lg text-gray-300 max-w-lg">
       
          Winner Of <span className="font-semibold !text-white  ">Sa Re Ga Ma Pa</span> | 1st Runner Up <span className="font-semibold !text-white ">India's Got Talent</span>
        </p>
      </div>

      <div>
        {/* todo section */}
      </div>
    </div>
  );
};

export default Homepage;

