import React from "react";
import CartItem from "./CartItem";

function Navbar() {
  return (
    <div className=" w-full h-auto  shadow-md  sticky bg-base-100 top-0 left-0 right-0 z-50 flex justify-around items-center flex-row">
      <div className="flex justify-around my-3 sm:mt-6 sm:mb-3 w-full items-center flex-row ">
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
                  <div className="text-2xl  cursor-default ">Menu</div>
                  <label
                    htmlFor="my-drawer"
                    className=" cursor-pointer btn btn-ghost btn-circle mx-1   text-2xl "
                    aria-label="close"
                  >
                    ✕
                  </label>
                </div>
                <button className=" text-lg block w-full text-start border-b-2  hover:bg-gray-200 cursor-pointer">
                  <a className="flex justify-between items-center px-4">
                    <div>Search</div>
                    <button className="text-lg align-middle   mx-1 px-2 py-1 btn btn-circle btn-ghost">
                      <img
                        className="w-7 h-7"
                        src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
                      />
                    </button>
                  </a>
                </button>
                <button className="pl-3 py-3 text-lg block w-full text-start border-b-2  hover:bg-gray-200 cursor-pointer">
                  <a>Categories</a>
                </button>
                <button className="pl-3 py-3 text-lg block w-full text-start border-b-2  hover:bg-gray-200 cursor-pointer">
                  <a>Wedding</a>
                </button>
                <button className="pl-3 py-3 text-lg block w-full text-start  border-b-2  hover:bg-gray-200 cursor-pointer">
                  <a>Occasional</a>
                </button>
                <button className="pl-3 py-3 text-lg block w-full text-start  border-b-2  hover:bg-gray-200 cursor-pointer">
                  <a>Tent & Catering</a>
                </button>
                <button className="pl-3 py-3 text-lg block w-full text-start  border-b-2  hover:bg-gray-200 cursor-pointer">
                  <a>Customize Menu</a>
                </button>
              </ul>
            </div>
          </div>

          <div className="text-xl  flex justify-center items-center flex-col max-w-16 btn-circle w-full h-full text-center">
            <img
              className="w-9  sm:mx-0 sm:w-12  mt-2"
              src="https://cdn-icons-png.flaticon.com/128/45/45200.png"
            />
            <div className="font-medium text-center text-lg sm:text-xl">
              Saifii's
            </div>
          </div>
        </div>
        <ul className="flex justify-around items-center flex-row md:gap-x-10 ">
          <div className="flex justify-around items-center flex-row">
            <button className="text-lg text-center  border-b-white hover:border-b-stone-300 border-b-2  hidden  sm:flex justify-center mx-1  px-2 py-1 cursor-pointer dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="">
                Menu{" "}
                <span
                  style={{
                    display: "inline-block",
                    translate: "0 -1px",
                    transform: "rotate(180deg)",
                  }}
                >
                  ^
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-start bg-base-100 mt-8  z-[1] w-52 shadow"
              >
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Pulao / Biryani
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Qorma / Curry
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Barbeque
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Tandoor
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Desserts
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Beverages
                  </a>
                </li>
              </ul>
            </button>
            <button className="text-lg text-center border-b-white hover:border-b-stone-300 border-b-2  hidden lg:inline mx-1  px-2 py-1 cursor-pointer ">
              Wedding
            </button>
            <button className="text-lg text-center border-b-white hover:border-b-stone-300 border-b-2  hidden lg:inline mx-1  px-2 py-1 cursor-pointer ">
              Occasional
            </button>
            <button className="text-lg text-center  border-b-white hover:border-b-stone-300 border-b-2  hidden  sm:flex justify-center mx-1  px-2 py-1 cursor-pointer dropdown dropdown-hover">
              <div tabIndex={0} role="button" className="">
                Tent & Catering{" "}
                <span
                  style={{
                    display: "inline-block",
                    translate: "0 -1px",
                    transform: "rotate(180deg)",
                  }}
                >
                  ^
                </span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-start bg-base-100 mt-8  z-[1] w-52 shadow"
              >
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Catering per Head
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Crockery per Head
                  </a>
                </li>
                <li className="px-3 py-1 text-sm  hover:bg-gray-200 cursor-pointer">
                  <a className="hover:underline hover:underline-offset-3">
                    Catering Item Wise
                  </a>
                </li>
              </ul>
            </button>
            <button className="text-lg text-center border-b-white hover:border-b-stone-300 border-b-2  hidden md:inline mx-1  px-2 py-1 cursor-pointer ">
              Customize Menu
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="text-lg align-middle  hidden sm:flex mx-1 px-2 py-1 btn btn-circle btn-ghost">
              <img
                className="w-7 h-7"
                src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png"
              />
            </button>
            <button className=""></button>
            <div className="drawer z-50 drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn text-lg align-middle   mx-1 px-2 py-1 btn-circle btn-ghost "
                >
                  <img
                    className="w-6 h-7"
                    src="https://cdn-icons-png.flaticon.com/128/833/833314.png"
                  />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay "
                ></label>
                <ul className="menu bg-base-200 text-base-content flex  flex-col  justify-between min-h-full sm:w-96 w-full p-4 ">
                  <div className="flex justify-start h-16 w-full items-center text-center pb-3 border-b-2 border-b-stone-400">
                    <label
                      htmlFor="my-drawer-4"
                      className=" cursor-pointer btn btn-ghost btn-circle ml-2 mr-6   text-2xl "
                      aria-label="close"
                    >
                      ✕
                    </label>
                    <div className="text-2xl  cursor-default ">Your Cart</div>
                  </div>
                  <div className="min-w-full  flex flex-col justify-start flex-1  min-h-full my-5">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    
                  </div>
                  <div className="w-full pt-5 h-20 border-t-2 border-t-stone-400">
                    <div className="text-lg font-medium rounded-sm hover:opacity-90 hover:scale-95 duration-200 cursor-pointer text-center bg-stone-800 text-base-100 w-full py-3">
                      Checkout: PKR 9742
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
