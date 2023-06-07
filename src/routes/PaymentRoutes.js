const express = require("express");
const router = express.Router();
const {
  FindAllPayment,
  FindOnePayment,
  CreatePayment,
  UpdatePayment,
  PatchPayment,
  DeletePayment,
} = require("../controllers/PaymentController");
const { VerifyToken, Admin } = require("../middleware/VerifyToken");

router.get("/", VerifyToken, Admin, FindAllPayment);
router.get("/:id", VerifyToken, Admin, FindOnePayment);
router.post("/", VerifyToken, Admin, CreatePayment);
router.put("/:id", VerifyToken, Admin, UpdatePayment);
router.patch("/:id", VerifyToken, Admin, PatchPayment);
router.delete("/:id", VerifyToken, Admin, DeletePayment);

module.exports = router;
