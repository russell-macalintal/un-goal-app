"use strict";
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define(
    "location",
    {
      locationId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      Name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      classSize: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
      },
      classAge: {
        type: DataTypes.INTEGER(5).UNSIGNED,
        allowNull: false,
      }, // this one need to be a range so maybe not as integer
      Address: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      Subject: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      timeNeeded: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {}
  );

  return location;
};
