import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";
import { verifiedEmail } from "../utils/email";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const genSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, genSalt);

    const token = randomBytes(3).toString("hex");

    const user = await userModel.create({ email, password: hashed, token });

    verifiedEmail(user);

    return res.status(201).json({
      msg: "User created successfully",
      data: user,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};

export const viewAll = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await userModel.find();

    return res.status(201).json({
      msg: "Error creating user",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};

export const viewOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    let count: number = 0;
    const countValue = {
      email: user?.email,
      fullName: user?.fullName,
      address: user?.address,
      phone: user?.phone,
      avatar: user?.avatar,
    };

    const myValue = Object.values(countValue);

    for (let i of myValue) {
      if (i !== undefined) count++;
    }

    return res.status(201).json({
      msg: "One user discovered",
      status: 201,
      count,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};

export const verifyUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const { token } = req.body;

    const user = await userModel.findById(userID);

    if (user?.token === token) {
      const updated = await userModel.findByIdAndUpdate(
        user?._id,
        { verified: true },
        { new: true }
      );

      return res.status(201).json({
        msg: "User verified",
        status: 201,
        data: updated,
      });
    } else {
      return res.status(404).json({
        msg: "Error creating user",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user: any = await userModel.findOne({ email });

    const decrypt = await bcrypt.compare(password, user?.password);

    if (user?.email === email) {
      if (decrypt) {
        const encrypted = jwt.sign({ id: user?._id }, "AJJE", {
          expiresIn: "2d",
        });

        return res.status(201).json({
          msg: "User verified",
          status: 201,
          data: encrypted,
        });
      } else {
        return res.status(404).json({
          msg: "Password incorrect",
          status: 404,
        });
      }
    } else {
      return res.status(404).json({
        msg: "Email incorrect",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};
