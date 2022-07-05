import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import "./ProfileModal.css"
import {AppState} from '../../Context/AppProvider';
import {useNavigate} from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',bgcolor: 'background.paper',
    background: '#FFFFFF',
    borderRadius: '1rem',
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

const profile_signout=
{
  fontSize: "1rem",
  fontWeight: 'bolder',
  background: 'rgba(89, 156, 255, 0.84)',
  boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.25)',
  borderRadius: '1.2rem',
  marginTop: '10%',
  marginLeft: '6%',
  padding: '0.5rem 1.5rem 0.5rem 1.5rem',
}
const profile_stuff=
{
  fontSize: "1rem",
  fontWeight: 'bolder',
  background: 'rgba(255, 255, 255, 0.65)',
  boxShadow: '0px 2px 2px 1px rgba(0, 0, 0, 0.25)',
  borderRadius: '1.2rem',
  marginTop: '10%',
  marginLeft: '10%',
  padding: '0.5rem 1.5rem 0.5rem 1.5rem',
}

const navigate = useNavigate();

const {user,setUser} = AppState();


const handleLogout = () => {

  localStorage.removeItem("userInfo");
  navigate("/login");
  console.log("Logged out Successfully!")
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
                <Avatar alt="Parv" src={require('../../assets/Images/Profile_pic.jpeg')}  sx={avatarStyle}></Avatar>
                <Typography id="modal-modal-title avatar_title" variant="h6" component="h2" sx={avatar_title}>
                   {user?.name}
                </Typography>
                <Typography id="modal-modal-title avatar_desc"  variant="h6" component="h2" sx={ avatar_desc }>
                   Take Your decision wisely
                </Typography>
                <div className="profile_modal_buttons">
                  <Button className="profile_signout" variant="contained" color="primary" sx={profile_signout} onClick={handleLogout}> Sign Out</Button>
                  
                  <Button className="profile_stuff" color="primary" sx ={profile_stuff}> My Stuffs</Button>
                </div>
                
            </Box>
      </Modal>
    </div>
  )
}

export default ProfileModal