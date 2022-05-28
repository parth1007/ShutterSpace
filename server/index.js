import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoute from "./routes/posts.js";

const app = express();


app.use('/posts',postRoute);
app.post('/')


// ********** Check for its use ***********

app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

// Connect to mongodb atlas

const CONNECTION_URL = "mongodb+srv://parthsoni_1007:01021971@cluster0.7qpru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;

// mongoose.connect(CONNECTION_URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//         })
//     .then(()=> app.listen(PORT,()=> console.log(`server running on port ${PORT}`)))
//     .catch((error) => console.log(error.message));

    // const connect = async () => {
    //     try {
    //       await mongoose.connect(CONNECTION_URL);
    //       console.log("Connected to mongoDB.");
    //     } catch (error) {
    //       throw error;
    //     }
    //   };


    mongoose.connect(CONNECTION_URL, {useNewUrlParser: true}, () => {
        console.log('Connected to MongoDB');
    });
    
    
   
app.listen(8000 , () => {
    console.log("Connected to backend !")
})