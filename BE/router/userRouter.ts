import { Router } from "express";
import { createUser, viewAll, viewOneUser } from "../controller/userController";

const router: Router = Router();

router.route("/register").post(createUser);
router.route("/get-users").get(viewAll);
router.route("/get-one-user").get(viewOneUser);

export default router;
