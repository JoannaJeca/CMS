import { Router } from "express";
import {
  createBlog,
  viewAllBlogs,
  viewOneBlog,
  viewOneUserBlog,
} from "../controller/blogController";
import multer from "multer";

const upload = multer().single("upload");

const router: Router = Router();

router.route("/create-blog/:userID").post(upload, createBlog);
router.route("/view-all-blogs").get(viewAllBlogs);
router.route("/view-my-blogs/:userID").get(viewOneUserBlog);
router.route("/view-one-blog/:blogID").get(viewOneBlog);

export default router;
