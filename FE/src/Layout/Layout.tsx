import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar";
import HeadBlog from "../pages/home/Blog/HeadBlog";

const Layout = () => {
  return (
    <div className="flex justify-center items-center">
      <SideBar />
      <div className="w-[80%]">
        <HeadBlog />

        <div className="mb-20" />

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
