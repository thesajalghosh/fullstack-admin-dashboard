import React, { useState } from 'react'
import Navbar from 'components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import { useGetUserQuery } from "state/api"

import './Layout.css'
import { useSelector } from 'react-redux'

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const userId = useSelector((state) => state.global.userId)
  // const userId = "63701cc1f03239b7f700000e"

  const { data } = useGetUserQuery(userId)



  return (
    <div className='layout'>
      <div className='sidebar_container'>
        <Sidebar
          data={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
      <div className='container'>
        <Navbar
          data={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout

