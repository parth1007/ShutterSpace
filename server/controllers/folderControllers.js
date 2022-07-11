// const Posts = require("../modals/postMessage.js")
const Image = require("../models/PostImage.js")
const Folder = require("../models/Folder.js")
const User = require("../models/User.js")

const getFolders = async(req , res) => {
    try {
        const ans = await Folder.find();
        res.status(200).send(ans);

    } catch (error) {
        throw error;
    }
}
const createFolder = async (req , res) => {
    try {
        
        const {folderName} = req.body;
        const ans = await Folder.create({
            "folderName": folderName,
        })

        res.status(200).send(ans)

        
    } catch (error) {
        throw error;
    }
}

const renameFolder = async (req , res) => {
    try {
        // const user = req.user;
        const {folderId} = await req.params;
        const {folderName} = req.body
        const newFolder = await Folder.findByIdAndUpdate(folderId, { folderName:folderName },{new:true} );
        // console.log(newFolder)
        res.status(200).json(newFolder);

        // Folder.update (
        //     { _id : doc._id },
        //     { $set : { folderName : req.body.folderame } },
        //     function( err, result ) {
        //         if ( err ) throw err;
        //     }
        // );


    } catch (error) {
        throw error;
    }
}


const  deleteFolder = async (req , res) => {
    try {
        
        // const userId = req.user._id;
        const {folderId} = await req.params;

        await Folder.findByIdAndDelete(folderId);
        console.log("Folder deleted");
        res.status(200).send("Deleted");

    } catch (error) {
        throw error;
    }
}


module.exports = {createFolder , deleteFolder , renameFolder, getFolders};