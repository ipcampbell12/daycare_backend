'use strict';
/** @type {import('DataTypes-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('visits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      visitDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      visitCost: {
        type: DataTypes.DECIMAL,
        defaultValue: 25.00
      },
      paidFor: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      childId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      providerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      paymentId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      invoiceId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('visits');
  }
};