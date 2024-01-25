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
exports.loginUser = exports.verifyUser = exports.viewOneUser = exports.viewAll = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = require("crypto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const email_1 = require("../utils/email");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const genSalt = yield bcrypt_1.default.genSalt(10);
        const hashed = yield bcrypt_1.default.hash(password, genSalt);
        const token = (0, crypto_1.randomBytes)(3).toString("hex");
        const user = yield userModel_1.default.create({ email, password: hashed, token });
        (0, email_1.verifiedEmail)(user);
        return res.status(201).json({
            msg: "User created successfully",
            data: user,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.createUser = createUser;
const viewAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.find();
        return res.status(201).json({
            msg: "Error creating user",
            status: 201,
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.viewAll = viewAll;
const viewOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        let count = 0;
        const countValue = {
            email: user === null || user === void 0 ? void 0 : user.email,
            fullName: user === null || user === void 0 ? void 0 : user.fullName,
            address: user === null || user === void 0 ? void 0 : user.address,
            phone: user === null || user === void 0 ? void 0 : user.phone,
            avatar: user === null || user === void 0 ? void 0 : user.avatar,
        };
        const myValue = Object.values(countValue);
        for (let i of myValue) {
            if (i !== undefined)
                count++;
        }
        return res.status(201).json({
            msg: "One user discovered",
            status: 201,
            count,
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.viewOneUser = viewOneUser;
const verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const { token } = req.body;
        const user = yield userModel_1.default.findById(userID);
        if ((user === null || user === void 0 ? void 0 : user.token) === token) {
            const updated = yield userModel_1.default.findByIdAndUpdate(user === null || user === void 0 ? void 0 : user._id, { verified: true }, { new: true });
            return res.status(201).json({
                msg: "User verified",
                status: 201,
                data: updated,
            });
        }
        else {
            return res.status(404).json({
                msg: "Error creating user",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.verifyUser = verifyUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield userModel_1.default.findOne({ email });
        const decrypt = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
        if ((user === null || user === void 0 ? void 0 : user.email) === email) {
            if (decrypt) {
                const encrypted = jsonwebtoken_1.default.sign({ id: user === null || user === void 0 ? void 0 : user._id }, "AJJE", {
                    expiresIn: "2d",
                });
                return res.status(201).json({
                    msg: "User verified",
                    status: 201,
                    data: encrypted,
                });
            }
            else {
                return res.status(404).json({
                    msg: "Password incorrect",
                    status: 404,
                });
            }
        }
        else {
            return res.status(404).json({
                msg: "Email incorrect",
                status: 404,
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            msg: "Error creating user",
            status: 404,
        });
    }
});
exports.loginUser = loginUser;
