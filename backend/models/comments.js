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
            postId: {
                type: DataTypes.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                references: {
                    model: "posts",
                    key: "id",
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                onDelete: 'CASCADE',
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
            parentId: {
                type: DataTypes.INTEGER,
                onDelete: 'CASCADE',
                allowNull: true,
                default: null,
                references: {
                    model: "comments",
                    key: "id",
                },
            },
        }, {
            sequelize,
            tableName: "comments",
            timestamps: true,
            indexes: [{
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [{ name: "id" }],
                },
                {
                    name: "comments_users_fk_idx",
                    using: "BTREE",
                    fields: [{ name: "userId" }],
                },
                {
                    name: "comments_posts_fk_idx",
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