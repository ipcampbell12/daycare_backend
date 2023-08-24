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
    static associate({ Provider, Payment, Child }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" })
      this.belongsTo(Payment, { foreignKey: "payementId", as: "payment" })
      this.belongsTo(Child, { foreignKey: "childId", as: "child" })

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