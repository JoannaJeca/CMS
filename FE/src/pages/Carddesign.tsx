import React from "react";

interface iProps {
  icon?: React.ReactNode;
  Text?: string;
  shortwritup?: string;
  px?: string;
  arrow?: React.ReactNode;
  amount?: string;
  comments?: React.ReactNode;
  total?: string;
  share?: React.ReactNode;
}
const Carddesign = ({
  icon,
  Text,
  shortwritup,
  arrow,
  amount,
  comments,

  total,
  share,
}: iProps) => {
  return (
    <div>
      <div className=" h-[100%] w-[300px] boder rounded-lg p-2 transition-all duration-300 cursor-pointer hover:shadow-lg border-[3px] ">
        <div className=" h-[90%] w-[90%] flex  justify-center flex-col">
          <div className=" h-[50px] w-[50px] bg-blue-50 border rounded-full flex items-center justify-center">
            {icon}
          </div>
          <h1 className=" font-bold text-[16px] whitespace-normal">{Text}</h1>
          <h3 className=" text-[10px]">{shortwritup}</h3>

          <div className=" h-[ 200px] flex items-center justify-between w-[75%] text-[14px]  m-3">
            <div className="   gap-1 flex items-center">
              {arrow}
              {amount}
            </div>
            <div className=" flex  gap-1 items-center">
              {comments}
              {total}
            </div>
            <div>{share}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carddesign;
