const express = require("express");
const router = express.Router();
const { AuthRequestVaildators } = require("../../middleware/index");
const userController = require("../../controllers/user-controller");

router.post(
  "/signup",
  AuthRequestVaildators.authRequestVaildator,
  userController.create
);
router.delete("/user/:id", userController.destroy);
router.get("/user/:id", userController.get);
router.post(
  "/signin",
  AuthRequestVaildators.authRequestVaildator,
  userController.signIn
);
module.exports = router;
