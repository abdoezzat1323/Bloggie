const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        "blog", {
            title: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            discreption: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            titleFont: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            URL: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        }, {
            sequelize,
            tableName: "blog",
            timestamps: false,
        }
    );
};