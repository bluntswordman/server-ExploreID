const { Comment } = require('../models');

const createComment = async (req, res) => {
  const { commentBody, commentAuthor, commentAuthorPhoto, userId, locationId } = req.body;
  console.log(commentBody, commentAuthor, userId, locationId);
  try {
    const comment = await Comment.create({
      commentBody: commentBody || 'No comment',
      commentAuthor: commentAuthor || 'Anonymous',
      commentAuthorPhoto: commentAuthorPhoto || 'default.png',
      userId: userId || 'null',
      locationId: locationId || 'null'
    });
    res.status(201).json({msg: 'Comment created', comment});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllComments = async (req, res) => {
  const { locationId } = req.params;
  try {
    const comments = await Comment.findAll({
      where: { locationId: locationId }
    });
    res.status(200).json({ msg: 'Comments retrieved', comments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  getAllComments
}