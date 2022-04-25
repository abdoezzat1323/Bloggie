const db = require("../models");
const User = db.users;
const Post = db.posts;

exports.createPost = async(req, res) => {
    try {
        let postData = {};
        postData.userId = req.body.userId;

        // checking if not admin .
        if (!postData.userId)
            return res
                .status(400)
                .json({ success: false, data: "UserId was not specified!" });

        let isAdmin = User.count({
            where: {
                id: req.body.userId,
                isAdmin: true,
            },
        });
        // checking if not admin .
        if (!isAdmin)
            return res
                .status(400)
                .json({ success: false, data: "You are not allowed to make posts." });

        //checking for data.
        if (!req.body.title)
            return res
                .status(409)
                .json({ success: false, data: "Title is required!." });

        if (req.body.title.length < 1)
            return res
                .status(409)
                .json({ success: false, data: "Title is too short!" });

        if (!req.body.body)
            return res
                .status(409)
                .json({ success: false, data: "Post body is required!." });

        let post = await Post.create(req.body);
        if (!post)
            return res
                .status(500)
                .json({ success: false, data: "Could not create post!" });
        res.status(200).json({ success: true, data: post });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// edit post (PATCH)
exports.editPost = async(req, res) => {
    try {
        // check if post exist
        let post = await Post.findOne({ where: { id: parseInt(req.params.id) } });
        if (!post)
            return res
                .status(404)
                .json({ success: false, data: "post does not exist." });

        //checking for data.
        if (!req.body.body)
            return res
                .status(409)
                .json({ success: false, data: "Please type your post!" });

        if (req.body.body.length < 1)
            return res
                .status(409)
                .json({ success: false, data: "post can't be empty!." });

        if (req.body.userId) {
            let user = await User.count({
                where: {
                    id: req.body.userId,
                },
            });

            let isAdmin = User.count({
                where: {
                    id: req.body.userId,
                    isAdmin: true,
                },
            });

            console.log(user);
            if (!user)
                return res
                    .status(404)
                    .json({ success: false, data: "user does not exist." });

            // checking if not admin .
            if (!isAdmin)
                return res
                    .status(400)
                    .json({ success: false, data: "You are not allowed to edit posts." });

            if (post.userId !== req.body.userId)
                return res.status(402).json({
                    success: false,
                    data: "You aren't allowed to edit this post!",
                });
        }

        let result = await Post.update(req.body, {
            where: { id: parseInt(req.params.id) },
        });

        if (!result[0])
            return res
                .status(400)
                .json({ success: false, data: "could not update question data" });
        res.status(200).json({ success: true, data: "question updated!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// delete post (DELETE)
exports.deletePost = async(req, res) => {
    try {
        // check if post exist
        let post = await Post.count({ where: { id: parseInt(req.params.id) } });
        if (!post)
            return res
                .status(404)
                .json({ success: false, data: "post does not exist." });

        let result = await Post.destroy({ where: { id: parseInt(req.params.id) } });

        if (!result)
            return res
                .status(400)
                .json({ success: false, data: "could not delete post data" });
        res.status(200).json({ success: true, data: "delete updated!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, data: err });
    }
};

// get post by id (GET)
exports.getPost = async(req, res) => {
    try {
        let post = await Post.findOne({ where: { id: parseInt(req.params.id) } });
        if (!post)
            return res
                .status(404)
                .json({ success: false, data: "post does not exist." });
        res.status(200).json({ success: true, data: post });
    } catch (err) {
        res.status(500).json({ success: false, data: err });
    }
};

// get all posts
exports.getPosts = async(req, res) => {
    try {
        let posts = await Post.findAll();
        if (!posts)
            return res
                .status(404)
                .json({ success: false, data: "could not get data." });
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, data: { success: false, data: err } });
    }
};