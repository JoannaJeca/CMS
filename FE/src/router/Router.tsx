import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../pages/auth/Register";
import Verify from "../pages/auth/Verify";
import Login from "../pages/auth/Login";
import AuthLayout from "../Layout/AuthLayout";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "verify",
        element: <Verify />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
