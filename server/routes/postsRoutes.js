import express, { application } from 'express';
import { getPost, createPost } from '../controllers/postControllers.js';

const router = express.Router();


// router.get('/', getPosts);
router.post('/:folderId', createPost);
router.get('/:folderId', getPost);
// router.get('/folder', getfolderPosts);


export default router;


// localhost:8000/1515wd151wsd5c1s1sx/folder