import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddNewCategory() {
  const [sizeOptionCount, setSizeOptionCount] = useState(0);

  // Handle change for the size options
  const handleSizeOptionChange = (e) => {
    setSizeOptionCount(parseInt(e.target.value, 10));
  };

  // Generate the size input fields based on the sizeOptionCount
  const renderSizeInputs = () => {
    const sizeInputs = [];
    for (let i = 1; i <= sizeOptionCount; i++) {
      sizeInputs.push(
        <div key={i} className="mb-4">
          <h3 className="text-lg font-medium mb-2">Size Option {i}</h3>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-2"
            placeholder={`Description for Size ${i}`}
          />
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder={`Price for Size ${i}`}
          />
        </div>
      );
    }
    return sizeInputs;
  };

  return (
    <div className="relative bg-red-50 shadow-lg rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 mx-auto mt-10">
      <div className="flex justify-between items-center mb-3"> 
        <Link
          to="/saifii's/admin/category"
          className="absolute top-2 right-2 text-center pt-1 text-3xl  btn-circle hover:bg-base-300 duration-200"
        >
          &times;
        </Link>

        <h2 className="text-3xl font-bold mb-4 text-start">Add New Category</h2>
      </div>

      {/* Choose Category or Add New */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="category">
          Choose Category or Add New
        </label>
        <select
          id="category"
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="choose">Choose Category</option>
          <option value="new">Add New Category</option>
        </select>
      </div>

      {/* Name of Item */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="itemName">
          Name of Item
        </label>
        <input
          type="text"
          id="itemName"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter item name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="sizeOptions">
          Size Options
        </label>
        <input
          id="sizeOptions"
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handleSizeOptionChange}
        ></input>
      </div>

      {/* Dynamically rendered Size Inputs */}
      {renderSizeInputs()}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="btn btn-primary hover:shadow-md text-lg text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddNewCategory;
