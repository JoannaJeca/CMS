import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Register from "../pages/auth/Register";
import Signin from "../pages/auth/Signin";
import Verify from "../pages/auth/Verify";
import Login from "../pages/auth/Login";

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/Signin",
                element: <Signin/>,
            },
            {
                path: "/verify",
                element: <Verify/>,
            },
            {
                path: "/login",
                element: <Login/>
            }
        ]
    }
])