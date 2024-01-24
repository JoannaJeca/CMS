import { Document, Schema, Types, model } from "mongoose";
import { CAT } from "../utils/categories";

interface iBlog {
  title: string;
  authorName: string;
  category: string;
  content: string;

  displayImage: string;
  displayImageID: string;

  user: {};
}

interface iBlogData extends iBlog, Document {}

const blogModel = new Schema<iBlogData>(
  {
    authorName: {
      type: String,
    },
    title: {
      type: String,
    },
    category: {
      type: String,
      default: CAT.General,
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
      type: Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default model<iBlogData>("blogs", blogModel);
