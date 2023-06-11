const express = require("express");
const router = express.Router();
const {
  FindAllOrder,
  FindOneOrder,
  CreateOrder,
  UpdateOrder,
  PatchOrder,
  DeleteOrder,
} = require("../controllers/OrderController");
const { VerifyToken, BasicUser } = require("../middleware/VerifyToken");

router.get("/", VerifyToken, BasicUser, FindAllOrder);
router.get("/:id", VerifyToken, BasicUser, FindOneOrder);
router.post("/", VerifyToken, CreateOrder, BasicUser);
router.put("/:id", VerifyToken, BasicUser, UpdateOrder);
router.patch("/:id", VerifyToken, BasicUser, PatchOrder);
router.delete("/:id", VerifyToken, BasicUser, DeleteOrder);

module.exports = router;
