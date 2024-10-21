import React from "react";
import Navbar from "./Navbar";

function ViewItem() {
  return (
    <div>
      <div className="hero min-w-screen-xl mt-4 sm:mt-0 flex  justify-center items-center ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?ga=GA1.1.1648891514.1708859492&semt=ais_hybrid"
            className="max-w-72 sm:max-w-sm md:max-w-md lg:max-w-xl mx-10 rounded-sm  shadow-2xl "
          />
          <div className="drop-shadow-md  px-8 py-4 sm:px-8 sm:py-6 md:px-12 md:py-10 xmd:pr-20 xmd:pl-16 lg:pt-10 lg:pb-16 my-6">
            <p className="py-4     text-xl">Rice</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Biryani
            </h1>
            <div className="dropdown  dropdown-hover">
              <div
                tabIndex={0}
                className="my-3 bg-base-200 px-3 mr-3 py-2 text-center text-lg  "
              >
                Select Quantity
                <span
                  style={{
                    display: "inline-block",
                    translate: "0 -1px",
                    transform: "rotate(180deg)",
                    padding: "0 3px",
                  }}
                >
                  ^
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content cursor-pointer bg-base-100 p-3 rounded-none z-[1]  p-0 w-auto  shadow"
              >
                <div className="hover:bg-base-300 py-2 px-3   w-full text-sm flex justify-between items-center flex-col  pb-2 border-b-2 border-b-stone-200     text-center text-nowrap">
                  <p className="">5kg Rice with 5kg chicken</p>
                  <p className="font-medium">PKR: 12999</p>
                </div>
                <div className="hover:bg-base-300 py-2 px-3   w-full text-sm flex justify-between items-center flex-col  pb-2 border-b-2 border-b-stone-200     text-center text-nowrap">
                  <p className="">8kg Rice with 10kg chicken</p>
                  <p className="font-medium">PKR: 17999</p>
                </div>
              </ul>
            </div>

            <div className="font-medium my-4 text-xl">
              <span className="font-bold">Price: 0</span>
            </div>
            <div className=" btn hover:bg-base-200 bg-base-200 flex max-w-40 justify-center my-5 p-0 items-center font-semibold text-lg">
              <button className="hover:bg-base-300 border-r-2 py-2 px-4 mr-1 text-lg">
                -
              </button>
              <div className=" text-md py-2 px-4">1</div>
              <button className="hover:bg-base-300 border-l-2 py-2 px-4 ml-1 text-lg">
                +
              </button>
            </div>
            <div>
              <button className="btn drop-shadow-sm bg-base-200 py-2 px-6 text-xl">
                <span className="drop-shadow-md">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewItem;
