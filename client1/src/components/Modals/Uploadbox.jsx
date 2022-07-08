import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './UploadBox.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    borderRadius: '1.5rem',
   
  };

  
const Uploadbox = ({open,handleClose}) => {


  // const [picLoading, setPicLoading] = useState(false);



      // function to add image to cloudinary
      // const uploadImg = (pics) => {
      //   setPicLoading(true);
      //   if(pics === undefined){
      //     alert("Please Select an Image!")
      //     return;
      //   }
    
      //   if(pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/svg" || pics.type === "image/jpg"){
      //     const data = new FormData();
      //     data.append("file",pics);
      //     data.append("upload_preset","v4ggvft1");
      //     data.append("cloud_name","utkarshcloudinary")
      //     fetch("https://api.cloudinary.com/v1_1/utkarshcloudinary/image/upload",{
      //       method:"post",
      //       body: data,
      //     }).then((res) => res.json())
      //       .then(data => {
      //         setProfilePic(data.url.toString());
      //         console.log(data.url.toString());
      //         setPicLoading(false);
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //         setPicLoading(false);
      //       })
      //   }
      //   else{
      //     alert("Please upload an image");
      //   }
      // }


  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <img src= {require('../../assets/Images/upload.png')} className="upload_img" />
                {/* <input type="file" onChange = {(e) => {uploadImg(e.target.files)}}/> */}
                <button type="button" className="upload_browse"> Browse</button>
                <button type="button" className="upload_submit"> Submit</button>
            </Box>
      </Modal>
    </div>
  )
}

export default Uploadbox