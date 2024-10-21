import React from "react";

function CatItemMenuDetails() {
  return (
    <>
      <div className="p-8 my-10 max-h-screen">
        <div className="max-w-4xl  mx-auto    bg-red-50 rounded-lg shadow-lg p-3">
        <div className="flex justify-between  flex-col sm:flex-row items-center my-3 mx-6">
          <h2 className="text-3xl font-semibold mb-3 sm:mb-0"> 
            <span>Rice</span> Menu Item
          </h2>
        </div>
          <div className="flex justify-around py-8 w-full items-center flex-col xsm:flex-row ">
            <div className="flex justify-center items-start h-full flex-col">
              <img className="w-72 my-6 xsm:my-0 xsm:w-96 rounded-md shadow-lg" src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?ga=GA1.1.1648891514.1708859492&semt=ais_hybrid" />
            </div>
            <div className="bg-gray-50 py-3 px-0 xs:p-3 shadow-lg rounded-lg mb-6">
              <h3 className="text-lg mx-4 pt-3 font-semibold mb-4">
                Item Details
              </h3>
              <div className="flex justify-center items-start flex-col">
                <div className="mx-4">
                  <p className="py-3  border-t-2">
                    <span className="font-semibold">Name:</span> Biryani
                  </p>
                  <p className="py-3 border-t-2">
                    <span className="font-semibold">Category:</span> Rice
                  </p>
                  <p className=" justify-start border-y-2">
                    <div className="collapse duration-200 font-semibold w-full">
                      <input type="checkbox"/>
                      <div className="collapse-title">Size Options</div>
                      <div className="collapse-content">
                        <ul>
                          <button className="cursor-text hover:bg-base-200 my-1 py-1  px-2 flex justify-between pt-3 items-start border-t-2 flex-col ">
                            <p className="text-lg font-medium">8kg rice with 8kg chicken</p>
                            <span className="text-lg font-semibold">PKR: 14889</span>
                          </button>
                          <button className="cursor-text hover:bg-base-200 my-1 py-1  px-2 flex justify-between pt-3 items-start border-t-2 flex-col ">
                            <p className="text-lg font-medium">8kg rice with 8kg chicken</p>
                            <span className="text-lg font-semibold">PKR: 14889</span>
                          </button>
                          <p className=" my-1 py-1  px-2 flex justify-end w-full pt-3 items-center border-t-2 ">
                            <button className="px-4 py-2 btn btn-ghost bg-base-200 ">Edit</button>
                          </p>
                        </ul>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatItemMenuDetails;
