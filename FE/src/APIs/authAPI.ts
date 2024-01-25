import axios from "axios";

const URL: string = "https://cms-5zqp.onrender.com/api";

export const createUser = async (data: {}) => {
  try {
    return await axios.post(`${URL}/register`, data).then((res) => {
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

export const loginUser = async (data: {}) => {
  try {
    return await axios.patch(`${URL}/login-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
    return error;
  }
};
