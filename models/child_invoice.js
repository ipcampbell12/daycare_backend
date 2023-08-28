'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child_Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Child_Invoice.init({
    childId: DataTypes.INTEGER,
    invoiceId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: "children_invoices",
    modelName: 'Child_Invoice',
  });
  return Child_Invoice;
};