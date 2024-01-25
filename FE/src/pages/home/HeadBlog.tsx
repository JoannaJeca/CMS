import { FaBookOpen, FaPenClip } from "react-icons/fa6";
import pix from "../../Assets/IMG_20210508_220841_304.jpg";
import { NavLink } from "react-router-dom";

const HeadBlog = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] h-[60px] bg-slate-900 rounded-[40px] top-4 absolute flex justify-between">
        <div className="w-1/2"></div>
        <div className="w-1/2 pr-4 flex justify-end items-center">
          <div className="flex bg-red-300 gap-3 items-center cursor-pointer text-white">
            <FaPenClip />

            <div>Write</div>
            <div className="bg-red-100 mr-3 relative group">
              <div className="w-[60px] h-[60px] rounded-full border flex justify-center items-center bg-red-200 cursor-pointer">
                <img
                  src={pix}
                  style={{ width: "100%", borderRadius: "100%" }}
                />
              </div>
              <div className="w-[120px] h-[50px] text-[10px] font-thin bg-white absolute right-2 rounded-sm flex opacity-0 text-center group-hover:opacity-100 transition-all duration-300 items-center">
                Please complete your profile if not done
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBlog;
