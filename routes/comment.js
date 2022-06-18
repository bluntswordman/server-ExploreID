const { createComment, getAllComments } = require('../controllers/comment-controller');
const verifyToken  = require('../middleware/verifyToken');
const express = require('express');
const router = express.Router();

router.post('/',verifyToken, createComment);
router.get('/:locationId', getAllComments);

module.exports = router;