"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Order, {
        foreignKey: "order_id",
        as: "order",
      });
    }
  }
  Payment.init(
    {
      payment_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Order",
          key: "order_id",
        },
      },
      payment_method: {
        type: DataTypes.ENUM,
        values: ["Tunai", "Kartu Kredit", "Bank Transfer"],
      },
      payment_amount: DataTypes.INTEGER,
      payment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Payment",
      hooks: {
        afterCreate: async (payment, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Payments",
              task: "insert",
              description: `Insert process with data ${JSON.stringify(
                payment
              )}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        beforeUpdate: async (payment, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Payments",
              task: "updated",
              description: `Update process with data${JSON.stringify(payment)}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        afterDestroy: async (payment, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Payments",
              task: "deleted",
              description: `Process delete with data ${JSON.stringify(
                payment
              )}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
      },
    }
  );
  return Payment;
};
