const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "reacts", {
            category: {      // like , love .....
                type: DataTypes.STRING(15),
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
        }, {
            sequelize,
            tableName: "reacts",
            timestamps: false,
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