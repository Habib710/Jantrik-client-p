import React from 'react'
import { Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import CustomLink from '../Customs/CustomLink'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <div className="mydashbord ">
        <div className="text-center custom-side-bar">
          <Nav defaultActiveKey="/home" className="flex-column">
            <CustomLink to="orders">My Orders</CustomLink>
            <br />
            <CustomLink to="myreviews">Add Reviews</CustomLink>
            <br />
            <CustomLink to="profile">My Profile</CustomLink>
          </Nav>
        </div>
        <div className=" w-100 text-center">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
