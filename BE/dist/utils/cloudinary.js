"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: "dvtisceko",
    api_key: "661824158127633",
    api_secret: "sr_S-LAQK1gztg6n1Di-6z27c30",
});
exports.default = cloudinary_1.v2;
