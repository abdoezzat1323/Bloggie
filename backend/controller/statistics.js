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
  User.hasMany(Post);
  Post.belongsTo(User);
  st.countUserPost = await Post.findAll({
    include: User,
    attributes: [
      "userId",

      [Sequelize.fn("count", Sequelize.col("userId")), "CountPost"],
    ],
    where: { "$User.isPremium$": { [Op.eq]: true } },
    group: ["userId"],
    raw: true,
  });
  let s = JSON.stringify(st.countUserPost);
  let strfy = JSON.parse(s);

  // console.log(
  //   strfy[0]["user.firstName"],
  //   strfy[0]["user.lastName"],
  //   strfy[0]["user.email"]
  // );

  res.status(200).json({ success: true, data: strfy[0]["CountPost"] });
};
