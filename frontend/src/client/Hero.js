import React from "react";

function Hero() {
  return (
    <>
      <div className="w-screen h-auto bg-stone-100 text-gray-600 flex flex-col mb-10 justify-center items-center py-10">
        <div>
          <div className="text-xl flex justify-center items-center flex-col max-w-24 btn-circle w-full h-full text-center">
            <img
              className="w-12  sm:mx-0 sm:w-16 lg:w-24  mt-20"
              src="https://cdn-icons-png.flaticon.com/128/45/45200.png"
            /> 
            <div className="font-medium text-center text-lg sm:text-xl">
              Saifii's
            </div>
          </div>
        </div>
        <div className="text-2xl md:text-4xl text-center flex flex-col justify-center items-center">
          <div className="my-10">Helping to unite your loved ones with food</div>
          <button className=" bg-orange-500 hover:scale-105 hover:opacity-90 duration-200 text-white text-xl md:text-2xl divy-2 px-3 md:px-5 md:py-3">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
