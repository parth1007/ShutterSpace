import React from 'react'
import Contentbar from './Contentbar.jsx';
import {AppState} from '../../Context/AppProvider';
import axios from 'axios';
import {useEffect,useState} from 'react';


const Container = () => {

  const {activeFolder} = AppState();
  const [images, setImages] = useState([]);
  
  const fetchPosts = async () => {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        console.log(activeFolder._id);
        console.log("Fetching images");
        const {data} = await axios.get(`http://localhost:8000/api/post/${activeFolder._id}`,config);
        setImages(data);
        // console.log(data);
        console.log("Fetched images");

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      if(activeFolder){
      fetchPosts();
      }
    }, [activeFolder])
    
  return (
    <>
      {activeFolder ?
          
          <div className="img-container">
              <Contentbar/>
              {images.map((img,i) =>  {       
              return(
                  <div className="img" key={i}>{img?.imageUrl}</div>)
              })}  
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