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
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Child must have first name" },
        notEmpty: { msg: "First name must not be empty" }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Child must have last name" },
        notEmpty: { msg: "Last name must not be empty" },
      }
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: { msg: "Child must have a birthdate" },
        notEmpty: { msg: "Birthdate must not be empty" },
        isDate: { msg: "Must be a valid date" }
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        notNull: { msg: "Child must have status" },
        notEmpty: { msg: "Status must not be empty" },
      }
    },
  }, {
    sequelize,
    tableName: 'children',
    modelName: 'Child',
  });
  return Child;
};