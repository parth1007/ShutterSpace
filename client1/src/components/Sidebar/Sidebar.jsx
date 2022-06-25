import React from 'react'
import './Sidebar.css'
import {AppState} from '../../Context/AppProvider';

const Sidebar = () => {

  const {activeFolder,setActiveFolder} = AppState();

  return (
    <div className="sidebar">
      <button className="side-title">Create Albums</button>
      <div className="album-list">
      
          <div className="alb" onClick={()=>{setActiveFolder("Album1")}}>Album1</div>
          <div className="alb" onClick={()=>{setActiveFolder("Album2")}}>Album2</div>
          <div className="alb" onClick={()=>{setActiveFolder("Album3")}}>Album3</div>
          <div className="alb" onClick={()=>{setActiveFolder("Album4")}}>Album4</div>
          <div className="alb" onClick={()=>{setActiveFolder("Album5")}}>Album5</div>
          <div className="alb" onClick={()=>{setActiveFolder("Album6")}}>Album6</div>
      </div>

    </div>
  )
}

export default Sidebar;