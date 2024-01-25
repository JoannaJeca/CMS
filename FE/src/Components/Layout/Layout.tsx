import { Outlet } from "react-router-dom";
import SideBar from "../../pages/SideBar";
import HeadBlog from "../../pages/home/Blog/HeadBlog";

const Layout = () => {
  return (
    <div className="flex w-full justify-end">
      <div className=" fixed top-0 left-0 w-[250px]">
        <SideBar />
      </div>
      <div className="flex justify-center w-[calc(100%-250px)]">
        <div className="w-[100%]">
          <div className="flex justify-center w-full fixed  left-24 ">
            <HeadBlog />
          </div>

          <div className="mb-24" />

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
