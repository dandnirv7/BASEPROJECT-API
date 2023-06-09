"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const users = [
      {
        name: "Superuser",
        username: "superuser",
        email: "superuser@example.com",
        phone: "123456789",
        role_id: 1,
        password: await bcrypt.hash("superuserpassword", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Admin",
        username: "admin",
        email: "admin@example.com",
        phone: "987654321",
        role_id: 2,
        password: await bcrypt.hash("adminpassword", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
