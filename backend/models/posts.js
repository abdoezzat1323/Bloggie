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
            category: {
                type: DataTypes.STRING(45),
                allowNull: true,
            },
            timeCreated: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            },
            isPrivate: {
                type: DataTypes.CHAR(1),
                allowNull: true,
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: true,
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
                },
            ],
        }
    );
};