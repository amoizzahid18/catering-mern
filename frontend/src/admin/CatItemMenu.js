import React from "react";
import CatItemMenuCard from "./CatItemMenuCard";

function CatItemMenu() {
  return (
    <div className="">
      <div className=" text-3xl xsm:text-4xl font-medium  mx-20  my-12 ">
        RICE
      </div>
      <div className="grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 ">
        <CatItemMenuCard/>
        <CatItemMenuCard/>
        <CatItemMenuCard/>
        <CatItemMenuCard/>
        <CatItemMenuCard/>
        <CatItemMenuCard/>
        <CatItemMenuCard/>
      </div>
    </div>
  );
}

export default CatItemMenu;
