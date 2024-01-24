import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const genSalt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, genSalt);

    const user = await userModel.create({ email, password: hashed });

    return res.status(201).json({
      msg: "Error creating user",
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
      msg: "Error creating user",
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
