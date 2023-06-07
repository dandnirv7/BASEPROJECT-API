const express = require("express");
const router = express.Router();
const {
  SignUp,
  SignIn,
  FindAllUser,
  FindOneUser,
  UpdateUser,
  PatchUser,
  DeleteUser,
} = require("../controllers/UserController");
const {
  RegisterValidation,
} = require("../middleware/validation/UserValidation");
const {
  VerifyToken,
  SuperUser,
  Admin,
  BasicUser,
} = require("../middleware/VerifyToken");

router.post("/signup", RegisterValidation, SignUp);
router.post("/login", SignIn);
router.get("/", VerifyToken, Admin, FindAllUser);
router.get("/:id", VerifyToken, BasicUser, FindOneUser);
router.put("/:id", VerifyToken, Admin, UpdateUser);
router.patch("/:id", VerifyToken, Admin, PatchUser);
router.delete("/:id", VerifyToken, SuperUser, DeleteUser);

module.exports = router;
