import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Container from './components/Container/Container.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import UploadBox from './components/UploadBox/UploadBox.jsx';



function App() {

  var uploadBoxToggle = false;

  return (
    <div className="App">
      <Navbar/>
      <div className="pageBody">
        <Sidebar/>
        <Container/>
      </div>
      
      {uploadBoxToggle && <UploadBox/>}

    </div>
  );
}

export default App;
