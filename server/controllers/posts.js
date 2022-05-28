import PostMessage from "../modals/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



const createPosts = async (req , res) => {
    try {
        const { _id} = req.params.id
        const {name , ...otherDetail} = await User.findbyId({id : _id})
        // const {like } = await like.findbyId({id : _id})
        await Posts.save({
            "uploadBy" : name,
            "desc" : req.body.desc,
            "url" : req.body.imageUrl
        })

    } catch (error) {
        throw error
    }
}


// {
//     "createdBy" : "name",
//     "imageURL" : "string",
//     "desc" : "string",
//     "likeCount" : number ,
//     "folder" : 
// }
export const getPost = async (req, res) => {
    
    try{

        const {folderName} = req.params.folderName

        const {photos} = await Posts.find({folder : folderName})
    
     res.status(201).json(photos);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}