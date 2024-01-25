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

export const verifyUser = async (data: {}, ID: string) => {
  try {
    return await axios.patch(`${URL}/verify-user/${ID}`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const viewUsers = async () => {
  try {
    return await axios.get(`${URL}/get-users`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const viewOneUser = async (ID: string) => {
  try {
    return await axios.get(`${URL}/get-one-user/${ID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const loginUser = async (ID: string) => {
  try {
    return await axios.get(`${URL}/login-user/${ID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
