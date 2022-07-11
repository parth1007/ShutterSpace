import React from 'react'
import './Container.css'
import {AppState} from '../../Context/AppProvider';
import Uploadbox from '../Modals/Uploadbox';
import EditIcon from '@mui/icons-material/Edit';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from "react";
import UpdateAlbum from '../Modals/UpdateAlbum';



const Contentbar = () => {

  const [openAlb, setOpenAlb] = useState(false);
  const handleOpenAlb = () => setOpenAlb(true);
  const handleCloseAlb = () => setOpenAlb(false);

  const {activeFolder,user} = AppState();


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  
  return (
    <>
      <div className = "contentbar">

          <div className = "active-album">
            {activeFolder?.folderName} 
            <EditIcon sx={{marginLeft:"1rem",cursor:"pointer"}} onClick ={() => {handleOpenAlb()}}/>
          </div>
          <UpdateAlbum open={openAlb} handleClose={handleCloseAlb} />

          <div className="upload">
              <button type="submit" class="upload-btn" onClick={handleOpen}>Upload Images</button>
          </div>
      </div>

      <Uploadbox open={open} handleClose={handleClose}/>
  

  </>
  )
}

export default Contentbar