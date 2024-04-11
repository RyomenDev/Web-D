// import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");
const { response } = require("express");

// business Logic
exports.createComment = async (req, res) => {
  try {
    // fetch data from request body
    const { post, user, body } = req.body;

    // create comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new comment object into the db
    const savedComment = await comment.save(); // or use create

    // Find the Post By Id and the new comment to its comment array
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } }, // push - update operator - adding id of comment
      { new: true }
    )
      .populate("comments") //Populates the comment array with the comments document (object) - actual document related to ID
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error while creating comment",
    });
  }
};
