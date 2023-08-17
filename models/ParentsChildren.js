module.exports = (sequelize, DataTypes) => {
    const ParentsChildren = sequelize.define("ParentsChildren", {

    });

    Parents.belongsToMany(Children, { through: ParentsChildren });
    Children.belongsToMany(Parents, { through: ParentsChildren });

    return ParentsChildren;
};