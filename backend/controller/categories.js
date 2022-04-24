const { dirname } = require("path");

const db = require(dirname(require.main.filename) + "/models");
const Category = db.categories;
const User = db.users;

// ============== get categories(show all) categories ===========================
exports.getCategories = async (req, res) => {
  try {
    let category = await Category.findAll();
    if (!category)
      return res
        .status(404)
        .json({ success: false, data: "could not get category." });
    res.status(200).json({ success: true, data: category });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, data: { success: false, data: err } });
  }
};

//  ============== get category by id (GET) ===========================
exports.getOnecategory = async (req, res) => {
  try {
    let category = await Category.findOne({
      where: { id: parseInt(req.params.id) },
    });
    if (!category)
      return res
        .status(404)
        .json({ success: false, data: "category does not exist." });
    res.status(200).json({ success: true, data: category });
  } catch (err) {
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================

// ============== create categories ===========================
exports.createCategories = async (req, res) => {
  try {
    let letCategory = {};
    letCategory.userId = req.body.userId;
    let isAdmin = User.count({
      where: {
        id: req.body.userId,
        isAdmin: true,
      },
    });
    // checking  admin
    if (!isAdmin)
      return res.status(400).json({
        success: false,
        data: "You are not allowed to make category.",
      });

    let category = await Category.create(req.body);
    if (!req.body.category)
      return res
        .status(409)
        .json({ success: false, data: "category body is required!." });

    if (!category)
      return res
        .status(500)
        .json({ success: false, data: "Could not create category!" });

    res.status(200).json({ success: true, data: category });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================

// ============== update(edit) categories ===========================
exports.updateCategories = async (req, res) => {
  try {
    // check if post exist
    let category = await Category.findOne({
      where: { id: parseInt(req.params.id) },
    });
    if (!category)
      return res
        .status(404)
        .json({ success: false, data: "category does not exist." });

    //checking for data.
    if (!req.body.category)
      return res
        .status(409)
        .json({ success: false, data: "اكتب الكاتيجوري  يلا" });

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

      // checking  admin .
      if (!isAdmin)
        return res
          .status(400)
          .json({ success: false, data: "انت مش الادمن ياض." });
    }

    let final = await Category.update(req.body, {
      where: { id: parseInt(req.params.id) },
    });

    res.status(200).json({ success: true, data: "category updated!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================

// ============== delete categories ===========================
exports.deleteCategories = async (req, res) => {
  try {
    // check if post exist
    let category = await Category.count({
      where: { id: parseInt(req.params.id) },
    });
    if (!category)
      return res
        .status(404)
        .json({ success: false, data: "category does not exist." });

    let final = await Category.destroy({
      where: { id: parseInt(req.params.id) },
    });

    if (!final)
      return res
        .status(400)
        .json({ success: false, data: "could not delete category." });
    res.status(200).json({ success: true, data: "delete category!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, data: err });
  }
};
//=================================================================
