import React from "react";
import MenuItems from "./MenuItems";
import Categories from "../common-components/Categories";

import { useState, useEffect } from "react";
function Menu() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories"); // Replace with your backend API URL
        const data = await response.json();
        setCategories(data);
        console.log("Categories:", categories);
        console.log("Categories:", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  useEffect(() => {
    console.log("Categories state:", categories);
  }, [categories]); // Log whenever `categories` is updated
  
  return (
    <div className="my-20">
      <div className="flex justify-center mb-20 xsm:mb-32 items-start flex-col sm:flex-row ">
        <Categories categories = {categories}/>
        <MenuItems />
      </div>
    </div>
  );
}

export default Menu;
