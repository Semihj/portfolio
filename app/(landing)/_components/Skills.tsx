import Link from "next/link";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import { MdOutlineFormatQuote } from "react-icons/md";
import wp2 from "@/public/wp2.jpg"
import logo from "@/public/logo.jpg"
import Text from "@/app/_components/Text";
import Image from "next/image";
import Brightness from "@/app/_components/Brightness";

type Props = {};

function Skills({}: Props) {
  return (
    <div id="skills" className="flex flex-col lg:mt-20 mt-10 ">
      <div className="flex   justify-between gap-5 ">
        <div className="flex items-center gap-2  ">
          <p className="text-2xl lg:text-4xl">
            <span className="text-purple-600">#</span>skills
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between mt-5">
        <div className="flex flex-col gap-4 w-full relative">
       <Text text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, dolor."/>
       <Image 
       src={wp2}
       alt=""
       className="w-full max-h-[400px] object-cover hidden lg:inline-block  "
       width={200}
       height={200}
       />
       <Brightness top={300} left={200} color={"green"} />
       <div className="absolute bottom-0 right-0">
        <Image src={logo} alt="" width={50} height={50} />
       </div>
        </div>
        <div className="flex  pl-5 gap-5 w-full flex-wrap ">
          <div className="border border-gray-500 h-max  ">
            <div className="border-b p-3 font-bold text-xl">
              <h1>Languages</h1>
            </div>
            <div className="flex flex-wrap  gap-2 p-2 lg:p-4 text-gray-300 text-lg font-semibold">
              <span>Javascript</span>
              <span>Python</span>
              <span>TypeScript</span>
            </div>
            
          </div>
          <div className="border border-gray-500 h-max w-[200px] ">
            <div className="border-b p-3 font-bold text-xl">
              <h1>Database</h1>
            </div>
            <div className="flex flex-wrap  gap-2 p-2 lg:p-4 text-gray-300 text-lg font-semibold">
              <span>MongoDB</span>
              <span>Supabase</span>
              <span>Convex</span>
              <span>PostgresSQL</span>
              <span>Firebase</span>
            </div>
            
          </div>
          <div className="border border-gray-500 h-max w-[200px] ">
            <div className="border-b p-3 font-bold text-xl">
              <h1>Others</h1>
            </div>
            <div className="flex flex-wrap  gap-2  p-2 lg:p-4 text-gray-300 text-lg font-semibold">
              <span>HTML</span>
              <span>TailwindCSS</span>
              <span>Figma</span>
              <span>NextJS</span>
            </div>
            
          </div>
          <div className="border border-gray-500 h-max w-[200px] ">
            <div className="border-b p-3 font-bold text-xl">
              <h1>Frameworks</h1>
            </div>
            <div className="flex flex-wrap  gap-2 p-2 lg:p-4 text-gray-300 text-lg font-semibold">
              <span>ReactJS</span>
              <span>ExpressJS</span>
              <span>Flask</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
