import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = Schema({
    
    uploadBy: String,
    folder: {
        type: String,
        required: true
    },
    message: String,
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;