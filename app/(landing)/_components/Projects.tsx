import Link from "next/link";
import React from "react";
import { TiArrowRightOutline } from "react-icons/ti";
import project1 from "@/public/project1.png"
import project2 from "@/public/project2.jpg"
import project4 from "@/public/project4.png"
import Image from "next/image";
import logo from "@/public/logo.jpg"
import { FaGithub } from "react-icons/fa";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div id="projects" className="w-full h-max flex flex-col gap-3 mt-20 lg:mt-40 ">
      <div className="flex w-full  justify-between ">
        <div className="flex items-center gap-2  ">
          <p className="text-2xl lg:text-4xl">
            <span className="text-purple-600">#</span>projects
          </p>
        </div>
        <Link href={"/projects"} className="flex gap-2 items-center cursor-pointer ">
            <p>View All</p>
            <TiArrowRightOutline className="text-2xl " />
        </Link>
      </div>
      <div className="grid grid-row-3 lg:grid-cols-3 gap-5 w-full min-h-screen lg:min-h-[400px] ">
        <div className="border-slate-300 border flex flex-col h-max ">
          <div className="border-y border-slate-300 h-[200px] w-full relative ">
          <Image
          src={project1}
          alt=""
          fill
          className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
          />
          </div>
         
          <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
            <span className="hover:text-white transition-all duration-200 cursor-pointer" >NextJS</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-red-500" >Convex</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 " >TypeScript</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-800 " >ClerkAuth</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 " >TailwindCSS</span>
          </div> 
          <div className="flex flex-col px-4 py-2 border-y text-gray-300">
            <h1 className="text-xl" >AI-BLOGGER</h1>
            <p className="capitalize text-lg">Creates blogs from scratch</p>

          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 p-4 ">
            <Link href={"https://ai-blogger.vercel.app/"} target="_blank" rel="noopener noreferrer" className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all " >
            Live
            <Image 
            src={logo}
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full "
            />
            
            </Link>
            <Link href={"https://github.com/Semihj/ai-blogger"} target="_blank" rel="noopener noreferrer" className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all " >
            Github
            <FaGithub/>
            
            </Link>
          </div>
        </div>
        <div className="border-slate-300 border flex flex-col h-max ">
          <div className="border border-slate-300 h-[200px] w-full relative ">
          <Image
          src={project2}
          alt=""
          fill
          className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
          />
          </div>
         
          <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
            <span className="hover:text-white transition-all duration-200 cursor-pointer" >NextJS</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-green-500" >Supabase</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 " >Redux</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 " >TypeScript</span>
          </div>
          <div className="flex flex-col px-4 py-2 border-y text-gray-300">
            <h1 className="text-xl" >Shoetopia</h1>
            <p className="text-lg">Full-Stack E-Commerce website</p>

          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 p-4 ">
            <Link href={"https://shoetopia.vercel.app/"} target="_blank" rel="noopener noreferrer" className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all " >
            Live
            <Image 
            src={logo}
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full "
            />
            
            </Link>
            <Link href={"https://github.com/Semihj/shoetopia/tree/master"} target="_blank" rel="noopener noreferrer" className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all " >
            Github
            <FaGithub/>
            
            </Link>
          </div>
        </div>
        <div className="border-slate-300 border flex flex-col h-max">
          <div className="border border-slate-300 h-[200px] w-full relative ">
          <Image
          src={project4}
          alt=""
          fill
          className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
          />
          </div>
          <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
            <span className="hover:text-white transition-all duration-200 cursor-pointer" >NextJS</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-green-500" >Supabase</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 " >Gemini</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-800 " >Redux</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 " >TailwindCSS</span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-yellow-400 " >TypeScript</span>
          </div>
          <div className="flex flex-col px-4 py-2 border-y text-gray-300">
            <h1 className="text-xl" >ChatPDF</h1>
            <p className="text-lg">Chat and ask to AI about PDF</p>

          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 p-4 ">
            <Link href={"https://nextjs-study-saas.vercel.app/"} target="_blank" rel="noopener noreferrer" className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all " >
            Live
            <Image 
            src={logo}
            alt=""
            width={40}
            height={40}
            className="object-cover rounded-full "
            />
            
            </Link>
            <Link href={"https://github.com/Semihj/nextjs-study-saas"} target="_blank" rel="noopener noreferrer" className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all " >
            Github
            <FaGithub/>
            
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
