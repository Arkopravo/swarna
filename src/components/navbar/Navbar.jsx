import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        Logo
      </div>

      <div>                                                         
        <ul className='list'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">DashBoard</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;
