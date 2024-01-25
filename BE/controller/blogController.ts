import { Request, Response } from "express";
import userModel from "../model/userModel";
import blogModel from "../model/blogModel";
import { stream } from "../utils/stream";
import { Types } from "mongoose";

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { title, content, category } = req.body;
    const { userID } = req.params;

    const user = await userModel.findById(userID);

    // const { secure_url, public_id }: any = await stream(req);

    if (user && user.verified) {
      const blog = await blogModel.create({
        authorName: user.fullName,
        title,
        content,
        category,
        displayImage: "secure_url",
        displayImageID: " public_id",
      });

      user.blogs.push(new Types.ObjectId(blog._id));
      user.save();

      return res.status(201).json({
        msg: "Blogs created",
        data: blog,
        status: 201,
      });
    } else {
      return res.status(404).json({
        msg: "Account not verified",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating blog",
      status: 404,
    });
  }
};

export const viewAllBlogs = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const blogs = await blogModel.find();

    return res.status(201).json({
      msg: "Reading all blogs",
      status: 201,
      data: blogs,
    });
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};

export const viewOneUserBlog = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;

    const blog = await userModel.findById(userID).populate({
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
  } catch (error) {
    return res.status(404).json({
      msg: "Error creating user",
      status: 404,
    });
  }
};
