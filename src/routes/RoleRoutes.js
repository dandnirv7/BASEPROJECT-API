const express = require("express");
const router = express.Router();
const {
  FindAllRole,
  FindOneRole,
  CreateRole,
  UpdateRole,
  PatchRole,
  DeleteRole,
} = require("../controllers/RoleController");
const { VerifyToken, SuperUser } = require("../middleware/VerifyToken");

router.get("/", VerifyToken, SuperUser, FindAllRole);
router.get("/:id", VerifyToken, SuperUser, FindOneRole);
router.post("/", VerifyToken, SuperUser, CreateRole);
router.put("/:id", VerifyToken, SuperUser, UpdateRole);
router.patch("/:id", VerifyToken, SuperUser, PatchRole);
router.delete("/:id", VerifyToken, SuperUser, DeleteRole);

module.exports = router;
