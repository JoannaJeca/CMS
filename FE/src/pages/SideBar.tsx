import { CiLogin } from "react-icons/ci";
import { FaBlog } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[20%] h-[100vh] flex justify-center items-center">
      <div className="bg-white flex justify-around items-center flex-col rounded-md h-[95%] w-[90%]">
        <div className="w-[200px] h-[50px] rounded-[20px] mt-3 ml-3 px-5 bg-slate-400 flex items-center ">
          <div className="w-[30px] h-[30px] bg-slate-800 rounded-[50%] flex justify-center items-center text-white font-bold text-[20px] mr-2 ">
            J
          </div>
          Jessica
        </div>
        <div className="w-[230px] h-[330px]  flex justify-around items-center flex-col mt-4 pt-2 ">
          <NavLink
            to="/"
            className="w-[200px] h-[50px] rounded-[20px] border-slate-800 border-2 flex items-center font-bold my-2 mx-2 hover:bg-slate-200 transition-all duration-300"
          >
            <div className="w-[30px] h-[30px] flex justify-center items-center text-black font-bold text-[25px] mr-2 ml-4 border-slate-800 border-3 ">
              <MdHome />
            </div>
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className="w-[200px] h-[50px] rounded-[20px] border-slate-800 border-2 flex items-center font-bold my-2 mx-2 hover:bg-slate-200 transition-all duration-300"
          >
            <div className="w-[30px] h-[30px] flex justify-center items-center text-black font-bold text-[25px] mr-2 ml-4 border-slate-800 border-3 ">
              <FaBlog />
            </div>
            Blogs
          </NavLink>
          <nav className="w-[200px] h-[50px] rounded-[20px] border-slate-800 border-2 flex  items-center font-bold my-2 mx-2 ">
            <div className="w-[30px] h-[30px] flex justify-center items-center text-black font-bold text-[25px] mr-2 ml-4 border-slate-800 border-3 ">
              <BiSolidCategoryAlt />
            </div>
            Category
          </nav>
          <nav className="w-[200px] h-[50px] rounded-[20px] border-slate-800 border-2 flex  items-center font-bold my-2 mx-2 ">
            <div className="w-[30px] h-[30px] flex justify-center items-center text-black font-bold text-[25px] mr-2 ml-4 border-slate-800 border-3 ">
              <CiRead />
            </div>
            Most Read
          </nav>
        </div>
        <div className="w-[200px] h-[50px] border-2 rounded-[20px] mx-2 border-slate-800 flex items-center px-2 ">
          <div className="w-[30px] h-[30px]  bg-slate-800 rounded-[50%] flex justify-center items-center text-white font-bold text-[20px] mr-2 ">
            <CiLogin />
          </div>
          Log-out
        </div>
      </div>
    </div>
  );
};

export default SideBar;
