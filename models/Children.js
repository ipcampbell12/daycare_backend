//const ParentsChildren = require("../ParentsChildren");

module.exports = (sequelize, DataTypes) => {

    const Children = sequelize.define("Children", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false

        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });



    return Children;

}