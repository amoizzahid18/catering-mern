import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./client/Navbar";
import Footer from "./client/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </> 
  );
}

export default Layout;
