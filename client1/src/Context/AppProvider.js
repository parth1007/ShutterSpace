import React from 'react';

import { useContext,useState,useEffect,createContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AppContext = createContext();

const AppProvider = ({children}) =>{
    
    // UseState Declarations

    const initial = JSON.parse(localStorage.getItem("userInfo"));
    const [user,setUser] = useState(initial); 
    const [activeFolder,setActiveFolder] = useState();
    const [toggleUploadModal, setToggleUploadModal] = useState(false);
    const [albums, setAlbums] = useState([]);


    const fetchAlbums = async () => {
        try {
        
          console.log("Fetching albums...");
          const {data} = await axios.get("http://localhost:8000/api/folder/getFolders");
          console.log(data);
          setAlbums(data);
          console.log("Fetched albums");

        } catch (error) {
          console.log(error);
        }
      }


    

    const navigate = useNavigate();


    // Get user from local storage

    useEffect(() => {
      const userInfo =  JSON.parse(localStorage.getItem("userInfo"));
      
      setUser(userInfo);
      console.log(userInfo);

      
    },[navigate])



    return(
        
        <AppContext.Provider 
                value={{  
                        user,setUser,
                        toggleUploadModal, setToggleUploadModal,
                        activeFolder,setActiveFolder,
                        albums, setAlbums,
                        fetchAlbums
                    }}>
                {children}
        </AppContext.Provider>
    )
    
}

export const AppState = () => {
    return useContext(AppContext);
}


export default AppProvider;