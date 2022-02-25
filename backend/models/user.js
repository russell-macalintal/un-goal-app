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
        FirstName: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        LastName: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        location: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        points:{
            type: DataTypes.INTEGER(5).UNSIGNED,
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
        }
    },
    {}
  );

  return user;
};