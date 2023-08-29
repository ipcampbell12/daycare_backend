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
    static associate({ Child, Invoice }) {
      // define association here
      this.belongsTo(Child, {
        foreignKey: "childId",
        as: "child"
      })
      this.belongsTo(Invoice, {
        foreignKey: "invoiceId",
        as: "invoice"
      })
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