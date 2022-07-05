import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./CreateAlbum.css"
import {AppState} from '../../Context/AppProvider';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    background: '#FFFFFF',
    borderRadius: '0.5rem',
    p: 4,
  };


const CreateAlbum = ({open,handleClose}) => {

  const [albumname, setAlbumname] = useState("");
  const {fetchAlbums,setActiveFolder} = AppState();


  const handleSubmit = async (e) => {
    e.preventDefault();
      try {

        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const folder={
          folderName : albumname,
        }
        
        const {data} = await axios.post("http://localhost:8000/api/folder/createFolder",folder,config);
        setActiveFolder(data);
        fetchAlbums();
        handleClose();
      } catch (error) {
        console.log(error);
      }
  }


  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
              <div className='create_album'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Create Album
                </Typography>
                <input type="text" className='album_name' placeholder='Enter a Name' onChange={(e) => setAlbumname(e.target.value)}/><br/>
                <button type="button" className="album_submit" onClick={handleSubmit}> Create</button>
                <button type="button" className="album_cancel" onClick={handleClose}> Cancel</button>
                </div>
            </Box>
      </Modal>
    </div>
  )
}

export default CreateAlbum