import React from "react";

function CategoryDetails() {
  return (
    <>
      <details className="dropdown mx-10 z-10  sm:hidden ">
        <summary className="btn m-1 bg-base-200 shadow-md hover:scale-105 hover:bg-base-300   rounded-sm">
          Categories
        </summary>
        <ul className="menu dropdown-content bg-base-200 rounded-none z-[1] w-52 px-4  shadow">
          <input
            type="text"
            placeholder="Search Category"
            className="input border-b-stone-200 border-y-2 bg-transparent  w-40 xsm:w-auto mx-1 rounded-none"
          />
          <div className="border-b-2 hover:cursor-default pb-2  rounded-none py-1 my-2 text-center ">
            <div className="flex justify-between flex-row items-center  ">
              Rice
              <input type="checkbox" className="checkbox checkbox-sm" />
            </div>
          </div>
          <div className="border-b-2 hover:cursor-default pb-2  rounded-none py-1 my-2 text-center ">
            <div className="flex justify-between flex-row items-center  ">
              Rice
              <input type="checkbox" className="checkbox checkbox-sm" />
            </div>
          </div>
          <div className="border-b-2 hover:cursor-default pb-2  rounded-none py-1 my-2 text-center ">
            <div className="flex justify-between flex-row items-center  ">
              Rice
              <input type="checkbox" className="checkbox checkbox-sm" />
            </div>
          </div>
          <div className="border-b-2 hover:cursor-default pb-2  rounded-none py-1 my-2 text-center ">
            <div className="flex justify-between flex-row items-center  ">
              Rice
              <input type="checkbox" className="checkbox checkbox-sm" />
            </div>
          </div>
        </ul>
      </details>
      <div className="hidden  sm:block">
        <div className="collapse  w-52 xsm:w-72  shadow-xl rounded-none mx-10 xsm:ml-20 mr-10  bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Categories</div>
          <div className="collapse-content w-48 xsm:w-auto">
            <input
              type="text"
              placeholder="Search Category"
              className="input border-y-stone-200 border-y-2 bg-transparent  w-40 xsm:w-auto mx-1 rounded-none"
            />
            <ul>
              <li className="flex justify-between items-center pt-1 pb-2   px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
              <li className="flex justify-between items-center pt-1 pb-2  px-5 border-b-2 my-2 text-center ">
                <a className=" ">Rice</a>
                <input type="checkbox" className="checkbox checkbox-md" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryDetails;
