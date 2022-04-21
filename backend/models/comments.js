const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "comments", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            comment: {      
                type: DataTypes.TEXT,
                allowNull: true,
            },
            timeCreated: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "posts",
                    key: "id",
                },
            },
            parentId: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
            }, ],
        }
    );
};