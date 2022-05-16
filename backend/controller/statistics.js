const { dirname } = require("path");
const { Sequelize, Op } = require("sequelize");
const db = require(dirname(require.main.filename) + "/models");
const User = db.users;
const Post = db.posts;

exports.getStatistics = async (req, res) => {
  let st = {};
  // ==================== user ============================
  st.countUserpremuim = await User.findAll({
    attributes: [
      "id",
      "firstName",
      "lastName",
      "email",
      [Sequelize.fn("count", Sequelize.col("isPremium")), "CountPremium"],
    ],
    where: { isPremium: true },
    group: ["id"],
    raw: true,
  });
  st.countUserNotpremuim = await User.findAll({
    attributes: [
      "id",
      "firstName",
      "lastName",
      "email",
      [Sequelize.fn("count", Sequelize.col("isPremium")), "CountNotPremium"],
    ],
    where: { isPremium: false },
    group: ["id"],
    raw: true,
  });
  st.allUser = st.countUserNotpremuim.length + st.countUserpremuim.length;
  // ===========================================================================
  // ======================== post for Premium user ============================
  st.countUserPost = await Post.findAll({
    attributes: [
      "userId",

      [Sequelize.fn("count", Sequelize.col("userId")), "CountPost"],
    ],
    where: { userId: [User.id] },
    group: ["userId"],
    raw: true,
  });
  res.status(200).json({ success: true, data: st.countUserPost });
};
