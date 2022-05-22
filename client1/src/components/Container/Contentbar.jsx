import React from 'react'
import './Container.css'

const Contentbar = () => {

  const displayUploadBox = () =>{
    console.log("Upload Now")
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