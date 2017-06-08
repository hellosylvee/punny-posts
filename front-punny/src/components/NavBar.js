import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem } from 'react-materialize'

const NavBar = () => {
  return(
    <Navbar brand='logo' right>
    	<Link to="/"><NavItem>Home</NavItem></Link>
    	<Link to="/new"><NavItem>Upload</NavItem></Link>
      <Link to="/categories"><NavItem>Categories</NavItem></Link>
    </Navbar>
  )
}

export default NavBar
