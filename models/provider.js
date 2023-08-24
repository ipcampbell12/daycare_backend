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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Provider must have first name" },
        notEmpty: { msg: "First name must not be empty" }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Provider must have last name" },
        notEmpty: { msg: "Last name must not be empty" }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Provider must have username" },
        notEmpty: { msg: "Username name must not be empty" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Provier must have password" },
        notEmpty: { msg: "Password must not be empty" }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Provider must have email" },
        notEmpty: { msg: "Email must not be empty" },
        isEmail: { msg: "Must be valid email address" }
      }
    },
  }, {
    sequelize,
    tableName: 'providers',
    modelName: 'Provider',
  });
  return Provider;
};