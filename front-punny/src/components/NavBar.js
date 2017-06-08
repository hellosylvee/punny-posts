import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/today">Today's Pun</Link></li>
        <li><Link to="/new">Upload</Link></li>
        <li><Link to="/signin">SignIn</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
