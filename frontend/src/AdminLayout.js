import React from 'react'
import Navbar from "./admin/Navbar.js"
import { Outlet } from 'react-router-dom'
function AdminLayout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default AdminLayout
