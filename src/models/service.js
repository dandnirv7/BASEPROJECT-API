"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Order, {
        foreignKey: "service_id",
        as: "orders",
      });
    }
  }
  Service.init(
    {
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      service_name: DataTypes.STRING,
      service_price: DataTypes.INTEGER,
      estimated_service_time: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Service",
      hooks: {
        afterCreate: async (service, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Services",
              task: "Service insert",
              description: `Insert process with data ${JSON.stringify(
                service
              )}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        beforeUpdate: async (service, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Services",
              task: "Service updated",
              description: `Update process with data${JSON.stringify(
                service
              )} `,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
        afterDestroy: async (service, options) => {
          const AuditLog = sequelize.models.AuditLog;
          try {
            await AuditLog.create({
              table_name: "Services",
              task: "Service deleted",
              description: `Process delete with data ${JSON.stringify(
                service
              )}`,
            });
          } catch (error) {
            console.error("Error creating audit log:", error);
          }
        },
      },
    }
  );
  return Service;
};
