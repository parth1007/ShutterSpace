import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Container from './components/Container/Container.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import UploadBox from './components/UploadBox/UploadBox.jsx';
import {AppState} from './Context/AppProvider';
import Login from './Pages/login/Login';
import Register from './Pages/register/Register';
import HomePage from './Pages/HomePage/HomePage';

import { Routes, Route  } from "react-router-dom";

function App() {


  const {toggleUploadModal, setToggleUploadModal} = AppState();

  return (
    // <div className="App">
    //   <Navbar/>
    //   <div className="pageBody">
    //     <Sidebar/>
    //     <Container/>
    //   </div>
      
    //   {toggleUploadModal && <UploadBox/>}

    // </div>


      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/login" element={ <Login /> }/>
          <Route exact path="/register" element={ <Register/>}/>
        </Routes>
      </div>
  );
}

export default App;
