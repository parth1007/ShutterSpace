const mongoose = require('mongoose');
const Image = require('../models/PostImage.js')

const folderSchema = mongoose.Schema({
    folderName : {
        type: String,
    },
    images : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Image",
        }
    ]
    
})


module.exports = mongoose.model('Folder', folderSchema);