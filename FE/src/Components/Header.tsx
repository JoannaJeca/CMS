import pix from "../Assets/IMG_20210508_220841_304.jpg";

const Header = () => {
  return (
    <div className="w-full h-[70px] bg-white flex justify-between">
      <div className="w-[350px] flex bg-red-100 h-[100%] items-center">
        <p className="font-semibold text-[23px] mr-2 ">Welcome</p>
        <p className="font-semibold text-[23px] mr-2">Abbey Jumaisica</p>
      </div>
      <div className="bg-red-100 mr-3 relative group">
        <div className="w-[60px] h-[60px] rounded-full border flex justify-center items-center bg-red-200 cursor-pointer">
          <img src={pix} style={{ width: "100%", borderRadius: "100%" }} />
        </div>
        <div className="w-[120px] h-[50px] text-[10px] font-thin bg-white absolute right-2 rounded-sm flex opacity-0 text-center group-hover:opacity-100 transition-all duration-300 items-center">
          Please complete your profile if not done
        </div>
      </div>
    </div>
  );
};

export default Header;
