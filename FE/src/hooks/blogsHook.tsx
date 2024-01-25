import useSWR from "swr";
import { viewAllBlogs, viewBlogById, viewUserBlog } from "../APIs/blogAPI";
import { useSelector } from "react-redux";

export const readBlogs = () => {
  const { data } = useSWR("/api/view-all-blogs", async () => {
    return viewAllBlogs().then((res) => {
      return res?.data;
    });
  });

  return { data };
};

export const readOneBlog = (ID: string) => {
  const { data } = useSWR("/api/view-one-blogs", async () => {
    return viewBlogById(ID).then((res) => {
      return res?.data;
    });
  });

  return { data };
};

export const readUserBlog = () => {
  const ID: any = useSelector((state: any) => state.ID);

  const { data } = useSWR("/api/view-user-blogs", async () => {
    return viewUserBlog(ID).then((res) => {
      console.log("ID", res);

      return res?.data;
    });
  });

  return { data };
};
