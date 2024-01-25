import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Quill = () => {
  let toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["link", "image", "video"],
    [{ size: ["small", false, "large", "huge"] }],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],
  ];

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <div className="w-full flex items-center flex-col">
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

      <div className="w-[60%]">
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="text-[30px] outline-none my-3 mb-1"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <ReactQuill
        theme="snow"
        className="w-[60%] h-screen"
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </div>
  );
};

export default Quill;
