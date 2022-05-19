const db = require("../models");
const Blog = db.blog;

exports.getVisitors = async(req, res) => {
    let c = await Blog.findOne();
    if (!c)
        return res
            .status(500)
            .json({ success: false, data: "Something went wrong!" });

    res.status(200).json({ success: true, data: c.visitors });
};

exports.incVisitors = async(req, res) => {
    let c = await Blog.findOne();
    if (!c)
        return res
            .status(500)
            .json({ success: false, data: "Something went wrong!" });

    c.increment(["visitors"], { by: 1 });

    res.status(200).json({ success: true, data: 1 });
};