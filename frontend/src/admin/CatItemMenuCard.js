import React from "react";
import { Link } from "react-router-dom";

function CatItemMenuCard() {
  return (
    <div className="flex max-w-96  justify-between items-center border-2 p-3 m-2  font-medium flex-row">
      <div className="flex justify-center mx-5 items-center w-40">
        <img
          className="w-28 h-20 object-cover rounded-md"
          src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?ga=GA1.1.1648891514.1708859492&semt=ais_hybrid"
        />
      </div>

      <div className="flex justify-center items-start pl-6 w-full h-full flex-col text-lg text-center">
        <div className="text-lg flex flex-col mx-3 xxs:mx-0 xxs:flex-row w-full xxs:items-center items-start justify-evenly my-1 font-medium">
          <div>Biryani</div>
          <div className="text-md xxs:text-lg text-nowrap font-light">
            10kg daig
          </div>
        </div>

        <div className="text-lg w-full flex justify-start  ">
          <div className="mx-2 xxs:mx-4 text-nowrap my-1">Quantity: 2</div>
        </div>
        <div className="text-lg w-full flex justify-start  ">
          <div className="mx-2 xxs:mx-4 text-nowrap ">PKR: 17999</div>
        </div>
        <div className="w-full flex justify-end">
          <Link to="/saifii's/admin/category/menu/item/id" className="btn btn-ghost btn-sm px-2 bg-base-200 font-semibold text-lg">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CatItemMenuCard;
