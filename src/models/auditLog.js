"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AuditLog extends Model {
    static associate(models) {}
  }
  AuditLog.init(
    {
      audit_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      table_name: DataTypes.STRING,
      task: DataTypes.STRING(100),
      description: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "AuditLog",
    }
  );
  return AuditLog;
};
