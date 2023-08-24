'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Payment, Parent, Visit, Child }) {
      // define association here

      this.hasMany(Payment, { foreignKey: "providerId", as: "payments", onDelete: 'cascade' })
      this.hasMany(Parent, { foreignKey: "providerId", as: "parents", onDelete: 'cascade' })
      this.hasMany(Visit, { foreignKey: "providerId", as: "visits", onDelete: 'cascade' })
      this.hasMany(Child, { foreignKey: "providerId", as: "children", onDelete: 'cascade' })
    }
  }
  Provider.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'providers',
    modelName: 'Provider',
  });
  return Provider;
};