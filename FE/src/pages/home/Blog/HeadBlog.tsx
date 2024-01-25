import { FaSearch } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const HeadBlog = () => {
  return (
    <div className="w-full  flex justify-center">
      <div className="w-[70%] border shadow-md h-[60px] bg-white rounded-[40px] top-4 fixed flex justify-between items-center">
        <div className="w-1/2 flex items-center">
          <div className="flex items-center w-full pl-3">
            <FaSearch size={25} />
            <input
              type="text"
              className="flex-[0.6] border-b border-grey-600 outline-none ml-4 py-1"
            />
          </div>
        </div>

        <img
          src=""
          className="bg-gray-500 h-[40px] w-[40px] rounded-full  "
          alt="User Avatar"
        />

        <div className="w-1/2 pr-4 flex justify-end items-center">
          <NavLink
            to="/blogs/write"
            className="flex gap-3 items-center cursor-pointer"
          >
            <FaPenClip />

            <div>Write</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeadBlog;
