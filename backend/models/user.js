'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    'user',
    {
        UserId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        Username: {
            type: DataTypes.STRING,
            unique: true
        },
        Email: {
            type: DataTypes.STRING,
            unique: true
        },
        FirstName: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        Skill: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        Points: {
            type: DataTypes.INTEGER(5).UNSIGNED,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Location: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        Admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {}
  );

  return user;
};