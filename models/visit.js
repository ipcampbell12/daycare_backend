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
    static associate({ Provider, Payment, Child, Invoice }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });
      this.belongsTo(Payment, { foreignKey: "paymentId", as: "payment" });
      this.belongsTo(Child, { foreignKey: "childId", as: "child" });
      this.belongsTo(Invoice, { foreignKey: "invoiceId", as: 'invoice' });

    }
  }
  Visit.init({
    visitDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        notNull: { msg: "Visit must have a date" },
        notEmpty: { msg: "Date must not be empty" },
        isDate: { msg: "Must be a valid date" }
      }
    },
    visitCost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 25.00,
      validate: {
        notNull: { msg: "Vist must have cost" },
        notEmpty: { msg: "Cost must not be empty" },
        isDecimal: { msg: "Cost must be valid " }
      }
    },
    paidFor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: { msg: "visit must have status" },
        notEmpty: { msg: "Status must not be empty" },
      }
    },
  }, {
    sequelize,
    tableName: "visits",
    modelName: 'Visit',
  });
  return Visit;
};