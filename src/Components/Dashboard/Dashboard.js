
import React from 'react'
import {Nav } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
      <div>
    <div className='d-flex '>
        <div className='bg-danger w-25'>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to='orders'>My Orders</Link>
        <Link to='myreviews'>My Reviews</Link>
        <Link to='profile'>My Profile</Link>
        
          
        
      </Nav>
      </div>
      <div className='bg-primary w-75'>
          <h1>Dasboard</h1>
          <Outlet></Outlet>


      </div>
    </div>
    </div>
  )
}

export default Dashboard
