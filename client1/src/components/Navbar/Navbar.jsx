import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className = "navbar">
      <div className = "title">PicMe</div>
      <div className = "search">
        <form>
          <input type="text" class="searchbar" placeholder="Search Album"/>
          <button type="submit" class="">search</button>
        </form>
      </div>
      <div className="userinfo">
        <button type="submit" class="logout">Logout</button>
      </div>
      
    </div>
  )
}

export default Navbar;

