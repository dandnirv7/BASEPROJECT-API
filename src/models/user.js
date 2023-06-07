"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: "role_id",
        as: "users",
      });
    }
  }
  User.init(
    {
      user_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Role",
          key: "role_id",
        },
      },
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      accessToken: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        afterCreate: async (user, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Users",
              task: "User insert",
              description: `Insert process with data ${JSON.stringify(user)}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        beforeUpdate: async (user, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Users",
              task: "User updated",
              description: `Update process with data ${JSON.stringify(user)}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        afterDestroy: async (user, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Users",
              task: "User deleted",
              description: `Delete process with data ${JSON.stringify(user)}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
      },
    }
  );

  return User;
};
