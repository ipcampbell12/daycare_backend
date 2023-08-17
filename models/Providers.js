module.exports = (sequelize, DataTypes) => {

    const Providers = sequelize.define("Providers", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        },
        passowrd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        }
    });

    return Providers;

}