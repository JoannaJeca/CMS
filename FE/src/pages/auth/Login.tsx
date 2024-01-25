import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../../APIs/authAPI";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginState } from "../../global/reduxState";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col bg-blue-50">
      <p className="font-bold text-[46px] mb-7 ">Login to your account !</p>
      <div className="w-50vh h-50vh">
        <div className="max-w-sm mx-auto">
          <div className="mb-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@test.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5"></div>
            <label
              // htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Don't have an account?{" "}
              <NavLink
                to="/auth/register"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Sign Up
              </NavLink>
            </label>
          </div>
          <button
            onClick={() => {
              loginUser({ email, password }).then((res) => {
                let decode: any = jwtDecode(res?.data);

                console.log(decode);
                dispatch(loginState(decode?.id));
                navigate("/");
              });
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
