import React from 'react'
import './Sidebar.css'
import {AppState} from '../../Context/AppProvider';
import CreateAlbum from '../Modals/CreateAlbum';

const Sidebar = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {activeFolder,setActiveFolder,albums} = AppState();

  // const handleClick = () => {
  //   console.log("ff")
  //   console.log(album.folderName)
    
  //   // setActiveFolder(albums[i].folderName);
  // }
  // setActiveFolder(album.folderName)

  return (
    <div className="sidebar">
      <button className="side-title" onClick={handleOpen}>Create Albums</button>

      <CreateAlbum open={open} handleClose={handleClose} />

      <div className="album-list">
          {albums.map((album,i) =>  {       
            return(
                <div className="alb" onClick={()=>{setActiveFolder(album)}} key={i}>{album?.folderName}</div>)
             })}          

      </div>

    </div>
  )
}

export default Sidebar;