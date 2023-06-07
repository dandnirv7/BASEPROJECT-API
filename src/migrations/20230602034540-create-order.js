"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "user_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "CASCADE",
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Services",
          key: "service_id",
        },
        onUpdate: "RESTRICT",
        onDelete: "CASCADE",
      },
      order_weight: {
        type: Sequelize.STRING,
      },
      order_status: {
        type: Sequelize.ENUM,
        values: ["Tertunda", "Dalam Pengerjaan", "Selesai"],
        defaultValue: "Tertunda",
      },
      order_date: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
