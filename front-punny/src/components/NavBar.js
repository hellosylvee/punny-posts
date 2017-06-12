import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div className='navbar'>
      <ul>
        <li><Link to="/puns">Home</Link></li>
        <li><Link to="/puns/new">Search</Link></li>
        <li><Link to="/today">Today's Pun</Link></li>
        {/* <li><Link to="/new">Upload</Link></li> */}
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
