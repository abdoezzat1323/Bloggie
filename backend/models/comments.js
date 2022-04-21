const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "comments", {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            postId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                references: {
                    model: "posts",
                    key: "id",
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            timeCreated: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            parentId: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: "comments",
                    key: "id",
                },
            },
        }, {
            sequelize,
            tableName: "comments",
            timestamps: false,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "reacts_users_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
                {
                    name: "reacts_posts_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "postId" }],
                },
                {
                    name: "coments_comments_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "parentId" }],
                },
            ],
        }
    );
};