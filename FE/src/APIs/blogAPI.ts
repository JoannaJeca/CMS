import axios from "axios";

const URL: string = "https://cms-5zqp.onrender.com/api";

export const createBlog = async (data: {}, ID: string) => {
  try {
    const config: any = {
      "content-type": "multipart/form-data",
    };

    return await axios.post(`${URL}/create-blog/${ID}`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const viewAllBlogs = async () => {
  try {
    return await axios.get(`${URL}/view-all-blogs`).then((res) => {
      console.log(res, "res");

      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const viewUserBlog = async (ID: string) => {
  try {
    return await axios.get(`${URL}/view-my-blogs/${ID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const viewBlogById = async (ID: string) => {
  try {
    return await axios.get(`${URL}/view-one-blog/${ID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
