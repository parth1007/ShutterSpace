import React from 'react'
import './Sidebar.css'
import {AppState} from '../../Context/AppProvider';
import CreateAlbum from '../Modals/CreateAlbum';

const Sidebar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {activeFolder,setActiveFolder} = AppState();

  return (
    <div className="sidebar">
      <button className="side-title" onClick={handleOpen}>Create Albums</button>

      <CreateAlbum open={open} handleClose={handleClose} />

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