"use strict";

const { query } = require("express");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Roles", [
      {
        role_name: "Super User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role_name: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
