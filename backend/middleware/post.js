const db = require("../models");
const User = db.users;
const Post = db.posts;
const moment = require("moment");

exports.canPost = async(req, res, next) => {
    let user = await User.findOne({ where: { id: req.body.userId } });
    if (!user.isAdmin) {
        if (!user.isPremium) {
            return res
                .status(402)
                .json({ success: false, data: "You are not allowed to write posts!" });
        } else {
            const now = moment();

            let month_posts = await Post.count({
                where: {
                    userId: user.id,
                    createdAt: {
                        [db.Sequelize.Op.gt]: now.subtract(30, "days").toString(),
                    },
                },
            });
            console.log(month_posts);
            if (month_posts >= 2) {
                return res.status(402).json({
                    success: false,
                    data: "You can only write two posts a month!",
                });
            }
        }
    }
    next();
};