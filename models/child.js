'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Child extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Parent, Provider, Visit }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });
      this.hasMany(Visit, { foreignKey: "childId", as: "visits", onDelete: "cascade" });
      this.belongsToMany(Parent, {
        through: "children_parents",
        foreignKey: "childId",
        as: "parents"
      })
    }
  }
  Child.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Child',
  });
  return Child;
};