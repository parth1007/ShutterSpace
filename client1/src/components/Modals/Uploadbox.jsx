import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './UploadBox.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    borderRadius: '1.5rem',
   
  };


const Uploadbox = ({open,handleClose}) => {


  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <img src= {require('../../assets/Images/upload.png')} className="upload_img" />
                <button type="button" className="upload_browse"> Browse</button>
                <button type="button" className="upload_submit"> Submit</button>
            </Box>
      </Modal>
    </div>
  )
}

export default Uploadbox