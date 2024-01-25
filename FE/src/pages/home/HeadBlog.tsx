import { FaBookOpen, FaPenClip } from "react-icons/fa6";

const HeadBlog = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[70%] h-[60px] bg-slate-900 rounded-[40px] top-4 absolute flex justify-between">
        <div className="w-1/2"></div>
        <div className="w-1/2 pr-4 flex justify-end items-center">
          <div className="flex gap-3 items-center cursor-pointer text-white">
            <FaPenClip />

            <div>Write</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBlog;
