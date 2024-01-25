import { Router } from "express";
import {
  createUser,
  loginUser,
  verifyUser,
  viewAll,
  viewOneUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/register").post(createUser);
router.route("/get-users").get(viewAll);
router.route("/get-one-user/:userID").get(viewOneUser);
router.route("/verify-user/:userID").patch(verifyUser);
router.route("/login-user/:userID").get(loginUser);

export default router;
