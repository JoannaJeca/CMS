"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    fullName: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    bio: {
        type: String,
    },
    phone: {
        type: String,
    },
    avatar: {
        type: String,
    },
    avatarID: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    token: {
        type: String,
    },
    blogs: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: "blogs",
        },
    ],
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userModel);
