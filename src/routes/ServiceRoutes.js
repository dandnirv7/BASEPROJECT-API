const express = require("express");
const router = express.Router();
const {
  FindAllService,
  FindOneService,
  CreateService,
  UpdateService,
  PatchService,
  DeleteService,
} = require("../controllers/ServiceController");
const { VerifyToken, Admin, BasicUser } = require("../middleware/VerifyToken");

router.get("/", VerifyToken, BasicUser, FindAllService);
router.get("/:id", VerifyToken, BasicUser, FindOneService);
router.post("/", VerifyToken, Admin, CreateService);
router.put("/:id", VerifyToken, Admin, UpdateService);
router.patch("/:id", VerifyToken, Admin, PatchService);
router.delete("/:id", VerifyToken, Admin, DeleteService);

module.exports = router;
