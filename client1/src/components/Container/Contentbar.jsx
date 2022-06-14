import React from 'react'
import './Container.css'
import {AppState} from '../../Context/AppProvider';


const Contentbar = () => {

  const {toggleUploadModal, setToggleUploadModal} = AppState();


  const displayUploadBox = () =>{
    console.log("Upload Now");
    setToggleUploadModal(true);
  }

  return (
    <div className = "contentbar">
        <div className = "active-album">Album</div>

        <div className="upload">
            <button type="submit" class="upload-btn" onClick={displayUploadBox}>Upload</button>
        </div>
    
  </div>
  )
}

export default Contentbar