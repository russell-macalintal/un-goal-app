"use strict";
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define(
    "student",
    {
      StudentId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      FirstName: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },

      Skill:{
        type: DataTypes.STRING(45),
        allowNull: false
      },
      Location: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      Email: {
        type: DataTypes.STRING,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {}
  );

  return student;
};
