import React from 'react'
import Contentbar from './Contentbar.jsx';
import {AppState} from '../../Context/AppProvider';
import axios from 'axios';
import {useEffect,useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const UnsplashImage = ({ url, key }) => (
  <div className="image-item" key={key} >
    <img src={url} />
  </div>
);

const Container = () => {

  const {activeFolder} = AppState();
  const [image, setImage] = useState([]);
  
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
        setImage(data);
        console.log(data);
        console.log("Fetched images");

      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      if(activeFolder){
      fetchPosts();
      }
      // console.log("hehehehe")
    }, [activeFolder])

    const [isShown, setIsShown] = useState(false);

    const [images, setImages] = React.useState([]);
    const [loaded, setIsLoaded] = React.useState(false);
  
    React.useEffect(() => {
      fetchImages();
    }, []);
  
    const fetchImages = (count = 20) => {
      const apiRoot = "https://api.unsplash.com";
      const accessKey =
        "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";
  
      axios
        .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
        .then(res => {
          setImages([...images, ...res.data]);
          setIsLoaded(true);
  
          console.log(images);
        });
    };


  return (
    <>
      {activeFolder ?
          
          <div className="img-container">
              <Contentbar/>
              {/* <div className="image-grid" style={{ marginTop: "30px" }}>
              {images.map((img,i) =>  {       
              return(
                  <div className="image-item" key={i} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                    {img?.imageUrl}

                    {isShown &&
                    {

                    }}
                  </div>

                  )
              })}  
              </div> */}
              <InfiniteScroll
            dataLength={images}
            width= '80%'
            next={() => fetchImages(5)}
            hasMore={true}
            loader={
              <img
                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                alt="loading"
              />
            }
            className='image_grid_cont'
          >
            <div className="image-grid" style={{ marginTop: "30px" }}>
              {loaded
                ? images.map((image, index) => (
                    <UnsplashImage
                      url={image.urls.raw + "&w=310"}
                      key={index}
                    />
                  ))
                : ""}
            </div>
          </InfiniteScroll>
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