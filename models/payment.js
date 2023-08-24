'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Provider }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });
    }
  }
  Payment.init({
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};