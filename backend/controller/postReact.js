const db = require("../models");
const User = db.users;
const Post = db.posts;
const React = db.reacts;
const PostReact = db.postReacts;
// const Comment = db.comments;

exports.createReact = async(req, res) => {
    try {
        if (!req.body.userId)
            return res
                .status(404)
                .json({ success: false, data: "userId was not specified." });

        let userExist = await User.count({
            where: {
                id: req.body.userId,
            },
        });

        if (!userExist)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist!" });
        
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

        if (!req.body.reactId)
            return res
                .status(404)
                .json({ success: false, data: "reactId was not specified." });

        let reactExist = await React.count({
            where: {
                id: req.body.reactId,
            },
        });

        if (!reactExist)
            return res
                .status(404)
                .json({ success: false, data: "react does not exist!" });

        let postReact = await PostReact.create(req.body);
        if (!postReact)
            return res
                .status(500)
                .json({ success: false, data: "Could not create react" });
        res.status(200).json({ success: true, data: PostReact });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

exports.updateReact = async(req, res) => {
    try {
        if (!req.body.userId)
            return res
                .status(404)
                .json({ success: false, data: "userId was not specified." });

        let userExist = await User.count({
            where: {
                id: req.body.userId,
            },
        });

        if (!userExist)
            return res
                .status(404)
                .json({ success: false, data: "user does not exist!" });
        
        if (!req.params.postId)
            return res
                .status(409)
                .json({ success: false, data: "PostId is not included!." });

        let postExist = await Post.count({
            where: {
                id: req.params.postId,
            },
        });

        if (!postExist)
            return res
                .status(404)
                .json({ success: false, data: "Post does not exist!" });

        if (!req.body.reactId)
            return res
                .status(404)
                .json({ success: false, data: "reactId was not specified." });

        let reactExist = await React.count({
            where: {
                id: req.body.reactId,
            },
        });

        if (!reactExist)
            return res
                .status(404)
                .json({ success: false, data: "react does not exist!" });

        let postReact = await PostReact.findOne({
            where: {
                postId: req.params.postId,
                userId: req.body.userId,
            }
        })

        
        if (!postReact)
            return res.status(404).json({
                success: false,
                data: "The post react you're trying to edit doesn't exist!",
            });

        if (postReact.reactId === req.body.reactId)
            return res.status(402).json({
                success: false,
                data: "you already have this react",
            });

        let postReactupdated = await PostReact.update({ reactId: req.body.reactId }, {
            where: {
                postId: req.params.postId,
                userId: req.body.userId,
            },
        });
        if (!postReactupdated)
            return res
                .status(500)
                .json({ success: false, data: "Could not update react" });
        res.status(200).json({ success: true, data: "post react updated!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

