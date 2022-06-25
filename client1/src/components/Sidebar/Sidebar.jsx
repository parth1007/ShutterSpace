import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="side-title">Create Albums</button>
      <div className="album-list">
      
          <div className="alb">AlbumName</div>
          <div className="alb">AlbumName</div>
          <div className="alb">AlbumName</div>
          <div className="alb">AlbumName</div>
          <div className="alb">AlbumName</div>
          <div className="alb">AlbumName</div>
      </div>

    </div>
  )
}

export default Sidebar;