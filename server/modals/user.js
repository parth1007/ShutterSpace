import mongoose from "mongoose";

const newSchema = new mongoose.Schema({
    "name" : {
        type : String,
        require : true,

    },
    "email" : {
        type : String,
        require : true,

    },
    "password" : {
        type : String,
        require : true,
        min : 6

    },
    "isAdmin" : {
        type : Boolean,
        default : false
    }
    
    



},{timestamps : true})

module.exports = mongoose.model("User" , newSchema)