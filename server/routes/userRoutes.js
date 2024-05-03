const express = require("express");
const {
  signUpController,
  signInController,

} = require("../controllers/userController");

const router = express.Router();

router.post("/signUp", signUpController);
router.post("/signIn", signInController);

module.exports = router;
