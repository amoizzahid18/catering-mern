import React from "react";

function Events() {
  return (
    <div className="flex flex-col border-t-2 pt-16  justify-between w-full items-center">
      <img
        className="z-0 w-4/5 sm:w-3/4 xmd:w-3/5 xlg:w-1/2 xlsm:-translate-x-10 "
        src="https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?ga=GA1.1.1648891514.1708859492&semt=ais_hybrid"
      />

      <div
        className="xlsm:z-10 flex object-cover -translate-y-16 xlsm:mt-0 w-2/3 sm:w-7/12 xmd:w-1/3  xsm:w-1/2   lg:w-2/5 xl:w-1/3 h-fit xlsm:translate-x-20 xlsm:-translate-y-36 lg:translate-x-28 lg:-translate-y-52 xlg:translate-x-36 text-xl xs:text-2xl  sm:text-3xl xsm:text-4xl slg:text-5xl  text-base-200 font-bold justify-around items-center px-5 xsm:px-0 py-10 xsm:pt-20 xsm:pb-16  flex-col"
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/merry-christmas-red-background_1361-3542.jpg?ga=GA1.1.1648891514.1708859492&semt=ais_hybrid")`,
        }}
      >
        <span className="my-2 drop-shadow-xl">Event Management?</span>
        <span className="my-3 drop-shadow-xl ">Saifii's Will Do It.</span>
        <button className="sm:text-2xl sm:px-5 sm:py-3 text-xl px-3 py-2 hover:bg-stone-700 duration-100 rounded-md  hover:scale-105 bg-stone-800 mt-4">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Events;
