/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test', {
    idtest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'test'
  });
};
