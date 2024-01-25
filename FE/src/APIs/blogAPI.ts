import axios from "axios";

const URL: string = "https://cms-5zqp.onrender.com";

export const createBlog = async (data: {}, ID: string) => {
  try {
    const config: any = {
      "content-type": "mulipart/form-data",
    };

    return await axios
      .post(`${URL}/create-blog/${ID}`, data, config)
      .then((res) => {
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
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const viewUserBlog = async (ID: string) => {
  try {
    return await axios.get(`${URL}view-my-blogs/${ID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
