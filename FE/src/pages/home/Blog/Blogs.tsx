import { NavLink } from "react-router-dom";
import { readUserBlog } from "../../../hooks/blogsHook";
import HeadBlog from "./HeadBlog";
import Carddesign from "../../Carddesign";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { BsFileArrowDownFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";

const Blogs = () => {
  const { data } = readUserBlog();

  return (
    <div className=" text-[500px]">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {data &&
          data?.blogs?.map((el: any) => (
            <NavLink to={`/blogs/view/${el?._id}`}>
              <Carddesign
                icon={<MdOutlineSettingsInputComposite />}
                Text={el?.title}
                shortwritup=" Jan 13 - 5m read Time"
                arrow={<BsFileArrowDownFill />}
                amount="3.40k"
                comments={<BiMessageDetail />}
                total="64k"
                share={<FaShare />}
              />
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
