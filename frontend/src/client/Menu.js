import React from "react";
import MenuItems from "./MenuItems";
import Categories from "../common-components/Categories";

function Menu() {
  return (
    <div className="my-20">
      <div className="flex justify-center mb-20 xsm:mb-32 items-start flex-col sm:flex-row ">
        <Categories />
        <MenuItems />
      </div>
    </div>
  );
}

export default Menu;
