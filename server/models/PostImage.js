const mongoose = require('mongoose');
const Folder = require('../models/Folder.js')

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
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
})


module.exports = mongoose.model('Image', ImageSchema);