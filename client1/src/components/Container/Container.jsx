import React from 'react'
import Contentbar from './Contentbar.jsx';
import {AppState} from '../../Context/AppProvider';



const Container = () => {

  const {activeFolder,setActiveFolder} = AppState();

  return (
    <>
      {activeFolder ?
          
          <div className="img-container">
              <Contentbar/>
          </div>
          :
          <div className="img-container" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h3>Select an Album</h3>
          </div>
      }
    </>
  )
}

export default Container