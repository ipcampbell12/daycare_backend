'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visit.init({
    visitDate: DataTypes.DATE,
    visitCost: DataTypes.DECIMAL,
    paidFor: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Visit',
  });
  return Visit;
};