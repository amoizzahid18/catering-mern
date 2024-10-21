import React from "react";

function CartItem() {
  return (
    <div className="flex justify-between items-center border-b-2 py-1  font-medium flex-row">
      <div className="flex justify-center mx-5 items-center w-40">
        <img
          className="w-28 h-20 object-cover rounded-md"
          src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?ga=GA1.1.1648891514.1708859492&semt=ais_hybrid"
        />
      </div>

      <div className="flex justify-center items-start pl-6 w-full h-full flex-col text-lg text-center">
        <div className="text-xl my-2 font-medium">Biryani</div>
        <div className="font-light mb-4">10kg daig</div>
        <div className="text-lg text-center">PKR: 17999</div>
        <div className="flex border-2 justify-center my-3 items-center font-semibold text-lg">
          <button className="hover:bg-base-300 border-r-2 px-3 mr-1 text-lg">
            -
          </button>
          <div className="px-1 text-md">1</div>
          <button className="hover:bg-base-300 border-l-2 px-3 ml-1 text-lg">
            +
          </button>
        </div>
      </div>
    
    </div>
  );
}

export default CartItem;
