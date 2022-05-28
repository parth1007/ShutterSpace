import React from 'react'
import './UploadBox.css';


const UploadBox = () => {

  const closeBox = () =>{
    console.log("box closed")
  }
  return (
    <div className="uploadBox">
      <button className="btn btn-primary closebtn" onClick={closeBox}> Close</button>
      <form className="uploadForm">
        <div class="mb-3">
          <label for="caption" class="form-label">Add a Caption</label>
          <textarea class="form-control" id="caption" rows="1"></textarea>
        </div>

        <div class="mb-3">
          <label for="formFileMultiple" class="form-label">Multiple files input example</label>
          <input class="form-control" type="file" id="formFileMultiple" multiple/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>

      </form>
    </div>
  )
}

export default UploadBox



//https://codepen.io/Ali-Majed/pen/BaRoyrG