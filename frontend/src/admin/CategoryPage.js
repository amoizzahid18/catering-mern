import React from "react";
import Categories from "../common-components/Categories";
import CatItemMenu from "./CatItemMenu";

function CategoryPage() {
  return (
    <div className="my-20 h-screen">
      <div className="flex justify-center mb-20 xsm:mb-32 items-start flex-col sm:flex-row ">
        <Categories />
        <div className="w-full flex justify-center items-center  mx-4 flex-col">
            <CatItemMenu/>
            <CatItemMenu/>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
