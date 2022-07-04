import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import "./ProfileModal.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',bgcolor: 'background.paper',
    background: '#FFFFFF',
    borderRadius: '2.5rem',
    boxShadow: 24,
  };


const ProfileModal = ({open,handleClose}) => {
const avatarStyle =
{
  fontSize: "2.5rem",
  width: "7vw",
  height: "7vw",
  border: "0.15rem solid #000000",

};
const avatar_title =
{
  marginTop: "0.4rem",
  fontWeight: 'bold',
  fontSize: "1.4rem",

};
const avatar_desc =
{
  fontSize: "1.25rem",
  color: "rgba(0, 0, 0, 0.37)",

};

  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Avatar alt="Parv" src={require('../../assets/Images/Profile_pic.jpeg')}  sx={avatarStyle}></Avatar>
                <Typography id="modal-modal-title avatar_title" variant="h6" component="h2" sx={avatar_title}>
                   Parv Choudhary
                </Typography>
                <Typography id="modal-modal-title avatar_desc"  variant="h6" component="h2" sx={ avatar_desc }>
                   Take Your decision wisely
                </Typography>
                <div className="profile_modal_buttons">
                  <Button className="profile_signout" variant="contained" color="primary"> Sign Out</Button>
                  
                  <Button className="profile_stuff"  color="primary" > My Stuffs</Button>
                </div>
                
            </Box>
      </Modal>
    </div>
  )
}

export default ProfileModal