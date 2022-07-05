import React from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Container from '../../components/Container/Container.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import {AppState} from '../../Context/AppProvider';
import './HomePage.css'

const HomePage = () => {


  const {toggleUploadModal, setToggleUploadModal,fetchAlbums,albums} = AppState();


  useEffect(() => {
    fetchAlbums();
    console.log(albums)

  }, [])
  

  return (
    <div>
       <Navbar/>
       <div className="pageBody">
         <Sidebar/>
         <Container/>
       </div>
      
    </div>
  )
}

export default HomePage