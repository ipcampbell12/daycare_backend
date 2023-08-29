'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent_Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Parent, Invoice }) {
      // define association here

      this.belongsTo(Parent, {
        foreignKey: 'parentId',
        as: 'parent'
      })
      this.belongsTo(Invoice, {
        foreignKey: 'invoiceId',
        as: 'invoice'
      })
    }
  }
  Parent_Invoice.init({
    parentId: DataTypes.INTEGER,
    invoiceId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: "parents_invoices",
    modelName: 'Parent_Invoice',
  });
  return Parent_Invoice;
};