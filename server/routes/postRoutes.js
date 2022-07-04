const express = require("express")

const {getPost , createPost} = require("../controllers/postControllers.js")
const {accessJwtToken} = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/:folderId',accessJwtToken, createPost);
// router.get('/:folderId', getPost);


// export default router;
module.exports = router;


// localhost:8000/1515wd151wsd5c1s1sx/folder