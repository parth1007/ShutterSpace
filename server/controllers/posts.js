import Posts from "../modals/postMessage.js";
const Image = require("../modals/PostImage.js")
const Folder = require("../modals/Folder.js")
const User = require("../modals/User.js")



export const createPosts = async (req , res) => {
    try {
        const {folderId,userId} = req.params;
        const {name} = await User.findbyId({id : userId});
        const folder = await Folder.findbyId({id : folderId});

        await Posts.save({
            "uploadBy" : name,
            "caption" : req.body.caption,
            "folder": folder,
        
        })

    } catch (error) {
        throw error
    }
}

// export const createPosts = async (req , res) => {
//     try {
//         const { _id} = req.params.id;
//         const {name , ...otherDetail} = await User.findbyId({id : _id});
//         await Posts.save({
//             "uploadBy" : name,
//             "caption" : req.body.caption,
//             "selectedFile" : req.body.selectedFile
//         })

//     } catch (error) {
//         throw error
//     }
// }

// export const getPost = async (req, res) => {
    
//     try{

//         const {folderName} = req.params.folderName;

//         const {photos} = await Posts.find({folder : folderName})
    
//      res.status(201).json(photos);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }

// }


