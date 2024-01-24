import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";

const App = () => {
  // const [value, setValue] = useState("");
  // const [content, setContent] = useState("");

  // const { quill, quillRef } = useQuill();

  // var toolbarOptions = [
  //   ["bold", "italic", "underline", "strike"],
  //   ["link", "image", "video"],
  //   [{ header: 1 }, { header: 2 }], // custom button values
  //   [{ list: "ordered" }, { list: "bullet" }],
  //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //   [{ direction: "rtl" }], // text direction

  //   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //   [{ font: [] }],
  //   [{ align: [] }],

  //   ["clean"],
  // ];

  // const module = {
  //   toolbar: toolbarOptions,
  // };

  // useEffect(() => {
  //   if (quill) {
  //     quill.on("text-change", () => {
  //       setContent(quillRef.current.firstChild.innerHTML);
  //     });
  //   }
  // }, [quill]);

  return (
    <div>
      {/* <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className=""
        modules={module}
        style={{
          height: "60vh",
        }}
      /> */}

      <div>
        Second quill
        <div ref={quillRef} />
      </div>
    </div>
  );
};

export default App;
