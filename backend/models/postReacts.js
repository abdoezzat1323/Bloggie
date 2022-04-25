const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "postReacts", {
            reactId: {
                type: DataTypes.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "reacts",
                    key: "id",
                },
            },
            userId: {
                type: DataTypes.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            postId: {
                type: DataTypes.INTEGER,
                onDelete: 'CASCADE',
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "posts",
                    key: "id",
                },
            },
        }, {
            sequelize,
            tableName: "postReacts",
            timestamps: true,
            indexes: [
            {
                name: "reacts_users_fk_idx",
                using: "BTREE",
                fields: [{ name: "userId" }],
            },
            {
                name: "reacts_posts_fk_idx",
                using: "BTREE",
                fields: [{ name: "postId" }],
            }, ],
        }
    );
};