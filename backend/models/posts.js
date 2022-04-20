const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "posts", {
            id: {
                autoIncrement: true,
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            category: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            publishDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            isPrivate: {
                type: DataTypes.CHAR(1),
                allowNull: true,
            },
            body: {
                type: DataTypes.TEXT,
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
        }, {
            sequelize,
            tableName: "posts",
            timestamps: false,
            indexes: [{
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [{ name: "id" }],
            },
            {
                name: "posts_users_fk_idx",
                using: "BTREE",
                fields: [{ name: "userId" }],
            }, ],
        }
    );
};