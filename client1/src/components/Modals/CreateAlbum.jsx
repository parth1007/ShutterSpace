import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./CreateAlbum.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    background: '#FFFFFF',
    borderRadius: '2.5rem',
    boxShadow: 24,
    p: 4,
  };


const CreateAlbum = ({open,handleClose}) => {



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
                    Album 1
                </Typography>
                <input type="text" className='album_name' placeholder='Enter a Name'/><br/>
                <button type="button" className="album_submit"> Submit</button>
                <button type="button" className="album_cancel"> Cancel</button>
                </div>
            </Box>
      </Modal>
    </div>
  )
}

export default CreateAlbum