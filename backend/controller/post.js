const db = require("../models");
const User = db.users;
const Post = db.posts;

exports.createPost = async(req, res) => {
    try {
        let postData = {};
        postData.userId = req.body.userId;
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