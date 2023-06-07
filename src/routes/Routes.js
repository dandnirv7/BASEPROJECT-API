const express = require("express");
const router = express.Router();
const RoleRoutes = require("./RoleRoutes");
const UserRoutes = require("./UserRoutes");
const ServiceRoutes = require("./ServiceRoutes");
const OrderRoutes = require("./OrderRoutes");
const PaymentRoutes = require("./PaymentRoutes");

router.use("/role", RoleRoutes);
router.use("/user", UserRoutes);
router.use("/service", ServiceRoutes);
router.use("/order", OrderRoutes);
router.use("/payment", PaymentRoutes);

module.exports = router;
