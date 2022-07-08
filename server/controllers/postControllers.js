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
        // console.log(ans)

        res.status(200).send(ans)

    } catch (error) {
        throw error
    }
}

const getPost = async (req, res) => {
    
    try{
        const {folderId} = req.params;
        const folder = await Folder.findOne({_id : folderId});
        const imgArr = []
        for(var i = 0 ; i < folder.images.length; i++) {
            const image = await Image.findById(folder.images[i])
            imgArr.push(image)
        }
    
     res.status(201).json(imgArr);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}


const likePost = async (req, res) => {
    
    try{
        const {postId} = req.params;
        const user = req.user;

        const tmp = await Image.find({
            _id: postId,
            likes: user._id,
        });
        if (tmp.length > 0) {
            return res
            .status(400)
            .json({ msg: "You have already liked this post" });
        }
        else{
            const img = await Image.findByIdAndUpdate(postId, {$push : {likes:user}} );
            res.status(201).json(img); 
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}

module.exports = {createPost,getPost,likePost}
