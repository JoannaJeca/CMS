import { Router } from "express";
import {
  createBlog,
  viewAllBlogs,
  viewOneUserBlog,
} from "../controller/blogController";
import multer from "multer";

const upload = multer().single("upload");

const router: Router = Router();

router.route("/create-blog/:userID").post(upload, createBlog);
router.route("/view-all-blogs").get(viewAllBlogs);
router.route("/view-my-blogs/:userID").get(viewOneUserBlog);

export default router;
