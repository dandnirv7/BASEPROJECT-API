const express = require("express");
const router = express.Router();
const { VerifyToken, SuperUser } = require("../middleware/VerifyToken");

const {
  FindAllRole,
  FindOneRole,
  CreateRole,
  UpdateRole,
  PatchRole,
  DeleteRole,
} = require("../controllers/RoleController");

router.get("/", VerifyToken, SuperUser, FindAllRole);
router.get("/:id", VerifyToken, SuperUser, FindOneRole);
router.post("/", VerifyToken, SuperUser, CreateRole);
router.put("/:id", VerifyToken, SuperUser, UpdateRole);
router.patch("/:id", PatchRole);
router.delete("/:id", VerifyToken, SuperUser, DeleteRole);

module.exports = router;
