import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='navbar'>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/today">Today's Pun</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/logout">Log Out</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
