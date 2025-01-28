import React from "react";
import MenuItems from "./MenuItems";
import Categories from "../common-components/Categories";

import { useState, useEffect } from "react";
function Menu() {

  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:5000/categories"); 
        const data = await response.json();
        setCategories(data);
        console.log("Categories:", categories);
        console.log("Categories:", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    
      const fetchItems = async () => {
        try {
          const response = await fetch("http://localhost:5000/items");
          const data = await response.json();
          setItems(data);
          console.log("Items:", items);
          console.log("Items:", data);
        } catch (error) {
          console.error("Error fetching items:", error);
        }
      };
    

    fetchCategories();
    fetchItems();
  }, []);
  useEffect(() => {
  }, [categories, items]); 
  
  return (
    <div className="my-20">
      <div className="flex justify-center mb-20 xsm:mb-32 items-start flex-col sm:flex-row ">
        <Categories categories = {categories}/>
        <MenuItems items = {items} />
      </div>
    </div>
  );
}

export default Menu;
