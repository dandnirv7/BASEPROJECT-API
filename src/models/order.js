"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      Order.belongsTo(models.Service, {
        foreignKey: "service_id",
        as: "service",
      });
      Order.hasOne(models.Payment, {
        foreignKey: "order_id",
        as: "payment",
      });
    }
  }
  Order.init(
    {
      order_id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "user_id",
        },
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Service",
          key: "service_id",
        },
      },
      order_weight: DataTypes.STRING,
      order_status: {
        type: DataTypes.ENUM,
        values: ["Tertunda", "Dalam Pengerjaan", "Selesai"],
        defaultValue: "Tertunda",
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Order",
      hooks: {
        afterCreate: async (order, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Orders",
              task: "Order insert",
              description: `Insert process with data ${JSON.stringify(order)}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        beforeUpdate: async (order, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Orders",
              task: "Order updated",
              description: `Update process with data${JSON.stringify(
                service
              )} `,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        afterDestroy: async (order, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Orders",
              task: "Order deleted",
              description: `Process delete with data ${JSON.stringify(order)}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
      },
    }
  );

  return Order;
};
