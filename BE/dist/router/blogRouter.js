"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controller/blogController");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)().single("upload");
const router = (0, express_1.Router)();
router.route("/create-blog/:userID").post(upload, blogController_1.createBlog);
router.route("/view-all-blogs").get(blogController_1.viewAllBlogs);
router.route("/view-my-blogs/:userID").get(blogController_1.viewOneUserBlog);
exports.default = router;
