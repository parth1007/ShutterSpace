import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx';
import Container from '../../components/Container/Container.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import UploadBox from '../../components/UploadBox/UploadBox.jsx';
import {AppState} from '../../Context/AppProvider';
import './HomePage.css'

const HomePage = () => {


  const {toggleUploadModal, setToggleUploadModal} = AppState();

  return (
    <div>
       <Navbar/>
       <div className="pageBody">
         <Sidebar/>
         <Container/>
       </div>
      
       {toggleUploadModal && <UploadBox/>}
    </div>
  )
}

export default HomePage