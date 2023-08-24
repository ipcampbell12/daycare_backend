'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Provider, Child }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });

      this.belongsToMany(Child, {
        through: "children_parents",
        foreignKey: "parentId",
        as: "children"
      })
    }
  }
  Parent.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Parent',
  });
  return Parent;
};