import { useParams } from "react-router-dom";
import { readOneBlog } from "../../../hooks/blogsHook";

const ViewBlog = () => {
  const { id } = useParams();

  const { data } = readOneBlog(id!);

  return (
    <div>
      <div className="w-full pt-10 flex flex-col items-center">
        <div className="w-[70%]">
          <div className="font-bold text-[40px] mb-5">
            {data?.title ? data?.title : "Title"}
          </div>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: data?.content ? data?.content : "",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
