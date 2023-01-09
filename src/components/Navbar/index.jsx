import React from 'react';
import { FaBell, FaUser } from "react-icons/fa"
import "./style.css"

const Navbar = () => {
  return (
    <div className='navbar flex'>
      <h1 className='navbar__logo'>Logo </h1>
      <div className="user__wrapper flex">
        <div className="bell__container flex">
          <FaBell className='bell__icon' />
          <span className='notification__indicator flex'>1</span>
        </div>
        <div className="user flex">
          <span>User profile</span>
          <FaUser className='user__icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
