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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }

        }
    });

    Providers.associate = (models) => {
        Providers.hasMany(models.Children, {
            onDelete: "casacde"
        });
    };

    return Providers;

}