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
    static associate(models) {
      // define association here
    }
  }
  Parent_Invoice.init({
    parentId: DataTypes.INTEGER,
    invoiceId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: "parent_invoices",
    modelName: 'Parent_Invoice',
  });
  return Parent_Invoice;
};