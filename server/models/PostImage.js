const mongoose = require('mongoose');
const Folder = require('../models/Folder.js')
const User = require('../models/User.js')


const ImageSchema = mongoose.Schema({
    uploadBy: {
        type : String
    },
    folder: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Folder",
        required: true
    },
    imageUrl:{
        type: String,
        required:true
    },
    caption: {
        type : String
    },
    likes: [
        {
          type: mongoose.Types.ObjectId,
          ref: "User",
        },
      ],
    createdAt:{
        type: Date,
        default: new Date()
    }
})


module.exports = mongoose.model('Image', ImageSchema);