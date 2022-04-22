const db = require("../models");
const User = db.users;
const Post = db.posts;
const Comment = db.comments;

exports.createComment = async(req, res) => {
    try {
        //checking for data.
        if (!req.body.comment)
            return res
                .status(409)
                .json({ success: false, data: "Please type your comment!" });

        if (req.body.comment.length < 1)
            return res
                .status(409)
                .json({ success: false, data: "Comment can't be empty!." });

        if (!req.body.postId)
            return res
                .status(409)
                .json({ success: false, data: "PostId is not included!." });

        let postExist = await Post.count({
            where: {
                id: req.body.postId,
            },
        });

        if (!postExist)
            return res
                .status(404)
                .json({ success: false, data: "Post does not exist!" });

        let comment = await Comment.create(req.body);
        if (!comment)
            return res
                .status(500)
                .json({ success: false, data: "Could not create comment!" });
        res.status(200).json({ success: true, data: comment });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.updateComment = async(req, res) => {
    try {
        //checking for data.
        if (!req.params.id)
            return res
                .status(409)
                .json({ success: false, data: "CommentId is not included!" });

        let comment = await Comment.findOne({
            where: { id: req.params.id },
        });

        if (!comment)
            return res.status(404).json({
                success: false,
                data: "The comment you're trying to edit doesn't exist!",
            });

        if (comment.userId !== req.body.userId)
            return res.status(402).json({
                success: false,
                data: "You aren't allowed to edit this comment!",
            });

        if (!req.body.comment)
            return res
                .status(409)
                .json({ success: false, data: "Comment is not included!" });

        if (req.body.comment.length < 1)
            return res
                .status(409)
                .json({ success: false, data: "Comment can't be empty!." });

        let commentUpdated = await Comment.update({ comment: req.body.comment }, {
            where: {
                id: req.params.id,
            },
        });

        if (!commentUpdated)
            return res
                .status(500)
                .json({ success: false, data: "Could not edit comment!" });

        res.status(200).json({ success: true, data: "Comment updated!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.deleteComment = async(req, res) => {
    try {
        //checking for data.
        if (!req.params.id)
            return res
                .status(409)
                .json({ success: false, data: "CommentId is not included!" });

        let comment = await Comment.findOne({
            where: { id: req.params.id },
        });

        if (!comment)
            return res.status(404).json({
                success: false,
                data: "The comment you're trying to delete doesn't exist!",
            });

        if (comment.userId !== req.body.userId)
            return res.status(402).json({
                success: false,
                data: "You aren't allowed to delete this comment!",
            });

        let deleteComment = await Comment.distroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deleteComment[0])
            return res
                .status(404)
                .json({ success: false, data: "Comment does not exist!" });

        res.status(200).json({ success: true, data: "Comment is deleted!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};