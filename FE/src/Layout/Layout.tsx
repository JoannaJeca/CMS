import { Outlet } from "react-router-dom";
import SideBar from "../pages/SideBar";
import HomeScreen from "../pages/home/HomeScreen";

const Layout = () => {
  return (
    <div className="flex justify-center items-center">
      <SideBar />
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
