import React from 'react'
import './Navbar.css'
import ProfileModal from '../Modals/ProfileModal';


// MUI Imports
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import {AppState} from '../../Context/AppProvider';



const Navbar = () => {

  const {user,setUser} = AppState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className = "navbar">
      <div className = "title">PicMe </div>
      
      <div className = "search">
         <SearchIcon className="search-icon" style={{marginLeft:"1rem"}}/>
          <InputBase className="search-field" 
              style={{color:"black",marginLeft:"0.5rem",width:"75%"}}
              placeholder="Search..."
          />
      </div>
      <div className="userinfo">

        <div className="logged-name">{user?.name}</div>      
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" onClick={handleOpen}/>
      </div>
      <ProfileModal open={open} handleClose={handleClose}/>
      
    </div>
  )
}

export default Navbar;

