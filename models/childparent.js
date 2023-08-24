'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildParent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Child, Parent }) {
      // define association here
      this.belongsTo(Child, {
        foreignKey: 'childId',
        as: "child"
      });
      this.belongsTo(Parent, {
        foreignKey: 'parentId',
        as: 'parent'
      })
    }
  }
  ChildParent.init({
    childId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER
  }, {
    sequelize,
    tableName: "children_parents",
    modelName: 'ChildParent',
  });
  return ChildParent;
};