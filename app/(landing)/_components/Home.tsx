import React from 'react'
import Image from "next/image";
import wp1 from "@/public/wp1.jpg";
import wp2 from "@/public/wp2.jpg";
import Brightness from '@/app/_components/Brightness';


type Props = {}

export default function Home({}: Props) {
  return (
    <div className=" w-full h-screen lg:h-[70vh] lg:mt-20 flex flex-col lg:flex-row gap-5 lg:justify-between">
    <div className="w-full relative h-max ">
      <p className=" text-2xl lg:text-4xl font-bold capitalize ">
        Building the web,Lets turn your{" "}
        <span className="text-sky-600">vision</span> into a functional and
        <span className="text-purple-600" > beautiful website.</span>{" "}
      </p>
      <p className="mt-5 text-lg  lg:text-2xl " >
      I'm creating responsive websites where technologies meet creativity
      </p>
      <button className="mt-4 text-lg lg:text-2xl px-4 py-2 cursor-pointer border border-purple-600 transition-all hover:bg-white hover:text-black duration-250 " >Contact ME!!</button>
      <Brightness bottom={0} left={10} color={"purple"} position={"absolute"} />
    </div>
    <div className="w-full relative  ">
      <Image
        src={wp2}
        alt=""
        className="absolute top-0 left-5 lg:left-10 z-0 w-[300px] lg:w-[300px]  "
        width={300}
        height={300}
      />{" "}
      <Image
        src={wp1}
        alt=""
        className="absolute top-40 lg:top-20 lg:left-1/2 left-5 z-10 w-[200px] lg:w-[300px] "
        width={300}
        height={300}
      />
    
    </div>
  </div>
  )
}