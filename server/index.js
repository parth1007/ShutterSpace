const express = require("express");
const userRoutes = require('./routes/userRoutes')
const folderRoutes = require('./routes/folderRoutes')
const postRoutes = require('./routes/postRoutes')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const dotenv = require("dotenv");


var cors = require('cors')


const app = express();
app.use(cors()) 

dotenv.config();


app.use(express.json());


app.use('/api/user',userRoutes);
app.use('/api/folder' , folderRoutes)
app.use('/api/post' , postRoutes)


// ********** Check for its use ***********

app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));
app.use(cors());

// Connect to mongodb atlas

const CONNECTION_URL = "mongodb+srv://parthsoni_1007:01021971@cluster0.7qpru.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 8000;


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB');
});

    
   
app.listen(8000 , () => {
    console.log("Connected to backend !")
})