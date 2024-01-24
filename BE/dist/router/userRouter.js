"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.route("/register").post(userController_1.createUser);
router.route("/get-users").get(userController_1.viewAll);
router.route("/get-one-user/:userID").get(userController_1.viewOneUser);
router.route("/verify-user/:userID").patch(userController_1.verifyUser);
router.route("/login-user/:userID").get(userController_1.loginUser);
exports.default = router;
