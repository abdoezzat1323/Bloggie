const { Op } = require("sequelize");

const { dirname } = require("path");

const db = require(dirname(require.main.filename) + "/models");
const Search = db.posts;

exports.getSearch = async (req, res) => {
  let list = [];
  let result = { qs: req.query.qs };
  const propertyValues = result.qs;
  const lst = propertyValues.split(" ");
  for (let i in lst) {
    const final = await Search.findAll({
      where: {
        [Op.or]: [
          { body: { [Op.like]: "%" + lst[i] + "%" } },
          { title: { [Op.like]: "%" + lst[i] + "%" } },
          { featured: { [Op.like]: "%" + lst[i] + "%" } },
        ],
      },
    });
    list.push(final);
  }
  res.status(200).json({ success: true, data: list });
};
