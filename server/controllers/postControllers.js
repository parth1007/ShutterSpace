// import Posts from "../modals/postMessage.js";
const Image = require("../models/PostImage.js")
const Folder = require("../models/Folder.js")
const User = require("../models/User.js")

// 62c32a71515b47f98179fb59

const createPost = async (req , res) => {
    try {
        const {folderId} = req.params;
        const userId = req.user._id;

        const {name} = await User.findOne({_id : userId});
        const folder = await Folder.findOne({_id : folderId});

        const ans = await Image.create({
            "uploadBy" : name,
            "caption" : req.body.caption,
            "folder": folder,
            "imageUrl" : req.body.imageUrl
        })
        await Folder.findByIdAndUpdate(folderId, 
            {
                $push : {images : ans}
            }
        )
        console.log(ans)

        res.status(200).send(ans)

    } catch (error) {
        throw error
    }
}

// export const getPost = async (req, res) => {
    
//     try{

//         const {folderName} = req.params.folderName;

//         const {photos} = await Posts.find({folder : folderName})
    
//      res.status(201).json(photos);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }

// }

module.exports = {createPost}
