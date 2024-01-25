import { FaBell } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";

const Quill = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[60%]">
        <div className="h-[70px] flex w-full items-center justify-between text-[15px]">
          <div className="w-1/2 ">Rufai Ahmed</div>
          <div className=" flex items-center gap-4">
            <div className="p-3 text-sm bg-emerald-500 text-white rounded-[40px] py-2">
              Publish
            </div>

            <div className="flex gap-5 items-center">
              <FaEllipsis />
              <FaBell />
              <img className="rounded-full bg-slate-800 w-[40px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quill;
