import { FaSearch } from "react-icons/fa";
import { FaPenClip } from "react-icons/fa6";

const HeadBlog = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] h-[60px] bg-white rounded-[40px] top-4 absolute flex justify-between">
        <div className="w-1/2 flex items-center">
          <div className="flex items-center w-full pl-3">
            <FaSearch size={25} />
            <input
              type="text"
              className="flex-[0.6] border-b border-black outline-none ml-4 py-3"
            />
          </div>
        </div>
        <div className="w-1/2 pr-4 flex justify-end items-center">
          <div className="flex gap-3 items-center cursor-pointer">
            <FaPenClip />

            <div>Write</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBlog;
