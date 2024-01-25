import Carddesign from "../Carddesign";
import { FaShare } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineSettingsInputComposite } from "react-icons/md";
import { VscSettingsGear } from "react-icons/vsc";
import { BsFileArrowDownFill } from "react-icons/bs";
import { MdAddHomeWork } from "react-icons/md";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { MdSocialDistance } from "react-icons/md";
import { LuMinimize } from "react-icons/lu";
import { useEffect, useState } from "react";
import { readBlogs } from "../../hooks/blogsHook";
import { viewAllBlogs } from "../../APIs/blogAPI";
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
  const { data } = readBlogs();

  return (
    <div>
      <div className=" w-full h-screen flex justify-center items-center">
        <div className=" h-[100%] w-full justify-center grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {data?.map((el: any) => (
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
    </div>
  );
};

export default HomeScreen;
