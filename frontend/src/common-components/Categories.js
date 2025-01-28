import React from "react";
import CategoryItem from "./CategoryItem";

function Categories({categories}) {
  return (
    <>
      <details className="dropdown sticky top-0 right-0 left-0 z-50 mx-10  sm:hidden ">
        <summary className="btn m-1 bg-base-200 shadow-md hover:scale-105 hover:bg-base-300   rounded-sm">
          Categories
        </summary>
        <ul className="menu dropdown-content bg-base-200 rounded-none z-[1] w-52 px-4  shadow">
        <input
              type="text"
              placeholder="Search Category"
              className="input border-b-stone-200 border-y-2 bg-transparent  w-40 xsm:w-auto mx-1 rounded-none"
            />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
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
              {categories?.map((category) => (
                <CategoryItem key={category.id} name={category.name} />
              ))}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
