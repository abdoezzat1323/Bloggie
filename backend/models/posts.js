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
            userId: {
                type: DataTypes.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: "users",
                    key: "id",
                },
            },
            title: {
                type: DataTypes.STRING(2048),
                allowNull: true,
            },
            featured: {
                type: DataTypes.STRING(512),
                allowNull: true,
            },
            isPrivate: {
                type: DataTypes.BOOLEAN,
                allowNull: true,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "posts",
            timestamps: true,
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
                },
            ],
        }
    );
};