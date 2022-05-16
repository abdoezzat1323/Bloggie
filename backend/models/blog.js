const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "blog",
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      discreption: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      visitors: {
        type: DataTypes.INTIGER,
        defaultValue: 0,
      },
      URL: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "blog",
      timestamps: false,
    }
  );
};
