"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewOneBlog = exports.viewOneUserBlog = exports.viewAllBlogs = exports.createBlog = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const blogModel_1 = __importDefault(require("../model/blogModel"));
const mongoose_1 = require("mongoose");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content, category } = req.body;
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        // const { secure_url, public_id }: any = await stream(req);
        if (user && user.verified) {
            const blog = yield blogModel_1.default.create({
                authorName: user.fullName,
                title,
                content,
                category,
                displayImage: "secure_url",
                displayImageID: " public_id",
            });
            user.blogs.push(new mongoose_1.Types.ObjectId(blog._id));
            user.save();
            return res.status(201).json({
                msg: "Blogs created",
                data: blog,
                status: 201,
            });
        }
        else {
            return res.status(404).json({
                msg: "Account not verified",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating blog",
            status: 404,
        });
    }
});
exports.createBlog = createBlog;
const viewAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blogModel_1.default.find();
        return res.status(201).json({
            msg: "Reading all blogs",
            status: 201,
            data: blogs,
        });
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.viewAllBlogs = viewAllBlogs;
const viewOneUserBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const blog = yield userModel_1.default.findById(userID).populate({
            path: "blogs",
            options: {
                sort: {
                    createdAt: -1,
                },
            },
        });
        return res.status(201).json({
            msg: "Finding users' blogs",
            status: 200,
            data: blog,
        });
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.viewOneUserBlog = viewOneUserBlog;
const viewOneBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { blogID } = req.params;
        const blog = yield blogModel_1.default.findById(blogID);
        return res.status(201).json({
            msg: "Finding users' blogs",
            status: 200,
            data: blog,
        });
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.viewOneBlog = viewOneBlog;
