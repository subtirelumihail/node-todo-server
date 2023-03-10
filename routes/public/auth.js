const { Router } = require("express");
const router = Router();

const AuthController = require("$controllers/auth");

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

module.exports = router;
