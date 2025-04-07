import React from "react";
import { MdOutlineFormatQuote } from "react-icons/md";

type Props = {text?:string};

function Text({text}: Props) {
  return (
    <div className="relative border border-gray-700 p-4 w-full ">
      <span className="absolute top-[-15px] left-2 bg-[#1E1E1E] h-5 w-10 justify-center flex ">
        <MdOutlineFormatQuote className="text-2xl" />
      </span>

      <p className="text-2xl">
        {text}
      </p>
      <span className="absolute bottom-[-10px] right-2 bg-[#1E1E1E] h-5 w-10 justify-center flex ">
        <MdOutlineFormatQuote className="text-2xl" />
      </span>
    </div>
  );
}

export default Text;
