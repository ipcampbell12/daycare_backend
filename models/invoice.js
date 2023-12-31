'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Provider, Child, Parent }) {
      // define association here
      this.belongsTo(Provider, {
        foreignKey: "providerId",
        as: "provider"
      });

      this.belongsToMany(Parent, {
        through: "parents_invoices",
        foreignKey: "invoiceId",
        as: "parents"
      });

      this.belongsToMany(Child, {
        through: "children_invoices",
        foreignKey: "invoiceId",
        as: "children"
      });
    }
  }
  Invoice.init({
    invoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        notNull: { msg: "Invoice must have date" },
        notEmpty: { msg: "Date cannot be empty" },
        isDate: { msge: "Field must be a valid date" }
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        notNull: { msg: "Invoice must have an amount" },
        notEmpty: { msg: "Amount cannot be empty" },
        isDecimal: { msg: "Amount be a valid amount" }
      }
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: "invoices",
    modelName: 'Invoice',
  });
  return Invoice;
};