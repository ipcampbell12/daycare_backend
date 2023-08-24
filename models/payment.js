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
    static associate({ Provider, Visit }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });

      this.belongsTo(Parent, { foreignKey: "parentId", as: "parent" });

      this.hasMany(Visit, { foreignKey: "paymentId", as: "visits", onDelete: 'cascade' })
    }
  }
  Payment.init({
    amount: DataTypes.DECIMAL,
    paymentType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};