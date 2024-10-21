import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" w-full h-auto shadow-md  sticky bg-base-100 top-0 left-0 right-0 z-50 flex justify-around items-center flex-row">
      <div className="flex justify-start ml-10 sm:ml-0 sm:justify-around my-2 sm:mt-4 sm:mb-3 w-full items-center flex-row ">
        <div className="flex justify-center items-center  gap-x-4">
          <div className="flex justify-center items-center  gap-x-4">
            <div className="drawer sm:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost  sm:mr-0 drawer-button btn-circle"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12127/12127259.png"
                  className="w-8  h-9"
                />
              </label>

              <div className="drawer-side z-50 ">
                <label
                  htmlFor="my-drawer"
                  aria-label="close"
                  className="drawer-overlay z-50 bg-black"
                ></label>
                <ul className=" bg-base-200 z-50  min-h-full w-80 ">
                  <div className="text-xl  flex justify-center items-center flex-col min-h-40 btn-circle w-full  text-center">
                    <img
                      className="w-12 mt-2"
                      src="https://cdn-icons-png.flaticon.com/128/45/45200.png"
                    />
                    <div className="font-medium text-xl">Saifii's</div>
                  </div>
                  <div className="flex border-y-2    py-4 px-4 justify-between items-center flex-row">
                    <div className="text-2xl  cursor-default ">Options</div>
                    <label
                      htmlFor="my-drawer"
                      className=" cursor-pointer btn btn-ghost btn-circle mx-1   text-2xl "
                      aria-label="close"
                    >
                      ✕
                    </label>
                  </div>

                  <button className="pl-3 py-3 text-lg block w-full text-start border-b-2  hover:bg-gray-200 cursor-pointer">
                    <a>Orders</a>
                  </button>
                  <button className="pl-3 py-3 text-lg block w-full text-start border-b-2  hover:bg-gray-200 cursor-pointer">
                    <a>Categories</a>
                  </button>
                  <button className="pl-3 py-3 text-lg block w-full text-start  border-b-2  hover:bg-gray-200 cursor-pointer">
                    <Link to="/saifii's/admin/category/add-category">Add New Category</Link>
                  </button>
                  
                </ul>
              </div>
            </div>

            <div className="text-xl ml-2 flex sm:hidden justify-center items-center flex-col max-w-16 btn-circle w-full h-full text-center">
              <img
                className="w-9  sm:mx-0 sm:w-12  mt-2"
                src="https://cdn-icons-png.flaticon.com/128/45/45200.png"
              />
              <div className="font-medium text-center text-lg sm:text-xl">
                Saifii's
              </div>
            </div>
          </div>
          <div className="text-xl hidden sm:flex justify-center items-center flex-col max-w-16 btn-circle w-full h-full text-center">
            <img
              className="w-9  sm:mx-0 sm:w-12  mt-2"
              src="https://cdn-icons-png.flaticon.com/128/45/45200.png"
            />
            <div className="font-medium text-center text-lg sm:text-xl">
              Saifii's
            </div>
          </div>
        </div>
        <ul className="hidden sm:flex justify-around items-center flex-row  sm:gap-x-10 ">
          <div className="flex justify-around items-center flex-row">
            <button className="text-xl  text-center border-b-white hover:border-b-stone-300 border-b-2 inline mx-1  px-2 py-1 cursor-pointer ">
              Orders
            </button>
            <button className="text-xl  text-center border-b-white hover:border-b-stone-300 border-b-2 inline mx-1  px-2 py-1 cursor-pointer ">
              Categories
            </button>
            <Link to="/saifii's/admin/category/add-category" className="text-xl  text-center border-b-white hover:border-b-stone-300 border-b-2 inline mx-1  px-2 py-1 cursor-pointer ">
              Add New Category
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
