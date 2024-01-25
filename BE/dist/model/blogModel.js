"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categories_1 = require("../utils/categories");
const blogModel = new mongoose_1.Schema({
    authorName: {
        type: String,
    },
    title: {
        type: String,
    },
    category: {
        type: String,
        default: categories_1.CAT.General,
    },
    content: {
        type: String,
    },
    displayImage: {
        type: String,
    },
    displayImageID: {
        type: String,
    },
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("blogs", blogModel);
