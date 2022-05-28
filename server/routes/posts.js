import express, { application } from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();


// router.get('/', getPosts);
router.post('/', createPost);
router.post('/:id/:folderName', getUserPost);
// router.get('/folder', getfolderPosts);


export default router;


// localhost:8000/1515wd151wsd5c1s1sx/folder