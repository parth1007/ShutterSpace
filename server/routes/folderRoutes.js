// import express from 'express';
const express = require("express")

const {getFolders,createFolder,renameFolder,deleteFolder} = require('../controllers/folderControllers.js')

const router = express.Router();

router.get('/getFolders', getFolders);
router.post('/createFolder', createFolder);
router.post('/renameFolder/:folderId', renameFolder);
router.delete('/deleteFolder/:folderId', deleteFolder);



module.exports = router;

