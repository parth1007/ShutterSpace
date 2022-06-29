import express from 'express';
import {createFolder,renameFolder,deleteFolder} from '../controllers/folderControllers.js';

const router = express.Router();


router.post('/createFolder', createFolder);
router.put('/renameFolder/:folderId', renameFolder);
router.delete('/deleteFolder/:folderId', deleteFolder);



export default router;

