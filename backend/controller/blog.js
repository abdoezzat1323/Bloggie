const db = require("../models");
const Blog = db.blog;

exports.getVisitors = async(req, res) => {
    let c = await Blog.findOne();
    console.log(c);
};

exports.incVisitors = async(req, res) => {};