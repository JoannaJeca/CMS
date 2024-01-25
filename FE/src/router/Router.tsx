import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Register from "../pages/auth/Register";
import Verify from "../pages/auth/Verify";
import Login from "../pages/auth/Login";
import AuthLayout from "../Components/Layout/AuthLayout";
import HomeScreen from "../pages/home/HomeScreen";
import Category from "../pages/home/Category";
import MostRead from "../pages/home/MostRead";
import Quill from "../pages/home/Blog/Quill";
import Blogs from "../pages/home/Blog/Blogs";
import PrivateRouter from "./PrivateRouters";
import ViewBlog from "../pages/home/Blog/ViewBlog";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "category",
        element: <Category />,
      },
      {
        path: "read",
        element: <MostRead />,
      },
    ],
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
        path: "verify/:ID",
        element: <Verify />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/blogs/write",
    element: <Quill />,
  },
  {
    path: "/blogs/view/:id",
    element: <ViewBlog />,
  },
]);
