import Posts from "../modals/postMessage.js";
const Image = require("../modals/PostImage.js")
const Folder = require("../modals/Folder.js")
const User = require("../modals/User.js")


export const createFolder = async (req , res) => {
    try {
        const user = req.user;
        const {folderName} = req.body;
        await Folder.save({
            "folderName": folderName,
        })


    } catch (error) {
        throw error;
    }
}

export const renameFolder = async (req , res) => {
    try {
        const user = req.user;
        const {folderId} = req.params;

        const newFolder = await Folder.findByIdAndUpdate(folderId, { folderName:folderName });

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


export const deleteFolder = async (req , res) => {
    try {
        const userId = req.user._id;
        const {folderId} = req.params;

        Folder.findByIdAndDelete(folderId);
        console.log("Folder deleted");
        res.status(200).send("Deleted");

    } catch (error) {
        throw error;
    }
}

