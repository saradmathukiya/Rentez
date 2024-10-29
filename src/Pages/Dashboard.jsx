import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Dashboard/Sidebar'

const Dashboard = () => {

  const { loading: profileLoading } = useSelector((state) => state.profile)
  const { loading: authLoading } = useSelector((state) => state.auth)

  if (profileLoading || authLoading) {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="loader">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
          </div>
      </div>
    )
  }
  

  return (
    <div className="dashboard-wrapper flex">
      <Sidebar />
      <div className="outlet-container">
        <div className="outlet-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard