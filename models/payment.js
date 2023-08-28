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
    static associate({ Provider, Visit, Parent }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });

      this.belongsTo(Parent, { foreignKey: "parentId", as: "parent" });

      this.belongsTo(Invoice, { foreignKey: "invoiceId", as: 'invoice' });

      this.hasMany(Visit, { foreignKey: "paymentId", as: "visits", onDelete: 'cascade' })
    }
  }
  Payment.init({
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: { msg: "Payment must have amount" },
        notEmpty: { msg: "Amount must not be empty" },
        isDecimal: { msg: "Amoutn must be valid " }
      }
    },
    paymentType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Payment must have type" },
        notEmpty: { msg: "Payment type cannot be empty" }
      }
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: "Payment must have a date" },
        notEmpty: { msg: "Date must not be empty" },
        isDate: { msg: "Must be a valid date" }
      }
    },
  }, {
    sequelize,
    tableName: "payments",
    modelName: 'Payment',
  });
  return Payment;
};