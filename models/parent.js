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
    static associate({ Provider, Child, Payment }) {
      // define association here
      this.belongsTo(Provider, { foreignKey: "providerId", as: "provider" });

      this.hasMany(Payment, { foreignKey: 'parentId', as: "payments", onDelete: "cascade" })

      this.belongsToMany(Child, {
        through: "children_parents",
        foreignKey: "parentId",
        as: "children"
      })
    }
  }
  Parent.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Parent must have first name" },
        notEmpty: { msg: "First name must not be empty" }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Parent must have last name" },
        notEmpty: { msg: "First name must not be empty" }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Parent must have email" },
        notEmpty: { msg: "Email must not be empty" },
        isEmail: { msg: "Must be valid email address" }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Parent must have phone number" },
        notEmpty: { msg: "Phone number must not be empty" },
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
    }
  }, {
    sequelize,
    tableName: "parents",
    modelName: 'Parent',
  });
  return Parent;
};