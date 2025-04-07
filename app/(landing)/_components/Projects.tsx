import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="w-full h-screen flex flex-col gap-3 mt-20">
      <div className="flex w-full  justify-between ">
        <div className="flex items-center gap-2  ">
          <p className="text-2xl lg:text-4xl">
            <span className="text-purple-600">#</span>projects
          </p>
        </div>
        <div className="flex gap-2 items-center cursor-pointer ">
            <p>View All</p>
            <TiArrowRightOutline className="text-2xl " />
        </div>
      </div>
      <div className="grid grid-row-3 lg:grid-cols-3 w-full min-h-screen lg:min-h-[400px] ">
        <div className="border"></div>
        <div className="border"></div>
        <div className="border"></div>
      </div>
    </div>
  );
}
