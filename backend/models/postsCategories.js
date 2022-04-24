const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "postsCategories", {
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "posts",
                    key: "id",
                },
            },
            categoryId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "categories",
                    key: "id",
                },
            },
        }, {
            sequelize,
            tableName: "postsCategories",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "postId" , name:"categoryId" }],
                },
                {
                    name: "postsCategories_categories_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "categoryId" }],
                },
                {
                    name: "postsCategories_posts_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "postId" }],
                },
            ],
        }
    );
};