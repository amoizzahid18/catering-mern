import React from "react";

function CategoryItem({id, name}) {
  return (
    <div>
      <div className="sm:hidden border-b-2 hover:cursor-default pb-2  rounded-none py-1 my-2 text-center ">
        <div className="flex justify-between flex-row items-center  ">
          Rice
          <input type="checkbox" className="checkbox checkbox-sm" />
        </div>
      </div>
      <li className="hidden sm:flex  justify-between items-center pt-1 pb-2   px-5 border-b-2 my-2 text-center ">
        <a className=" ">{name}</a>
        <input type="checkbox" className="checkbox checkbox-md" />
      </li>
    </div>
  );
}

export default CategoryItem;
