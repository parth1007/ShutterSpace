import React from 'react'
import './Container.css'
import {AppState} from '../../Context/AppProvider';
import Uploadbox from '../Modals/Uploadbox';




const Contentbar = () => {

  const {activeFolder} = AppState();


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className = "contentbar">
          <div className = "active-album">{activeFolder}</div>

          <div className="upload">
              <button type="submit" class="upload-btn" onClick={handleOpen}>Upload</button>
          </div>
      </div>

      <Uploadbox open={open} handleClose={handleClose}/>
  

  </>
  )
}

export default Contentbar