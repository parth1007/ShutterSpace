import express, { application } from 'express';
import { getPost, createPosts } from '../controllers/posts.js';

const router = express.Router();


// router.get('/', getPosts);
router.post('/:folderId/:userId', createPosts);
router.get('/:folderId', getPost);
// router.get('/folder', getfolderPosts);


export default router;


// localhost:8000/1515wd151wsd5c1s1sx/folder