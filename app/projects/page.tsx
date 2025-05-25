import React from "react";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.jpg";
import project4 from "@/public/project4.png";
import project5 from "@/public/project5.png";
import project6 from "@/public/project6.png";
import project7 from "@/public/project7.png";
import project8 from "@/public/project8.png";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="flex flex-col ">
     
      <div className="mt-10">
        <p className="text-4xl">
          <span className="text-purple-600">/</span>main
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-max overflow-hidden lg:p-2 py-5 mt-10  gap-10 justify-between ">
        <div className="flex flex-col lg:max-w-sm ">
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
              <span className="hover:text-white transition-all duration-200 cursor-pointer">
                NextJS
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-red-500">
                Convex
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 ">
                TypeScript
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-800 ">
                ClerkAuth
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 ">
                TailwindCSS
              </span>
            </div>
            <div className="flex flex-col px-4 py-2 border-y text-gray-300">
              <h1 className="text-xl">AI-BLOGGER</h1>
              <p className="capitalize text-lg">Create blogs from scratch</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-5 p-4 ">
              <Link
                href={"https://ai-blogger.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Live
                <Image
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover  "
                />
              </Link>
              <Link
                href={"https://github.com/Semihj/ai-blogger"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Github
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-slate-300 border flex flex-col h-max max-w-sm ">
          <div className="border border-slate-300 h-[200px] w-full relative  ">
            <Image
              src={project2}
              alt=""
              fill
              className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
            <span className="hover:text-white transition-all duration-200 cursor-pointer">
              NextJS
            </span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-green-500">
              Supabase
            </span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 ">
              Redux
            </span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 ">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 border-y text-gray-300">
            <h1 className="text-xl">Shoetopia</h1>
            <p className="text-lg">Full-Stack E-Commerce website</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-5 p-4 ">
            <Link
              href={"https://shoetopia.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
            >
              Live
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="object-cover  "
              />
            </Link>
            <Link
              href={"https://github.com/Semihj/shoetopia/tree/master"}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
            >
              Github
              <FaGithub />
            </Link>
          </div>
        </div>
        <div className="border-slate-300 border flex flex-col h-max max-w-sm ">
          <div className="border border-slate-300 h-[200px] w-full relative  ">
            <Image
              src={project4}
              alt=""
              fill
              className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
            />
          </div>

          <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
            <span className="hover:text-white transition-all duration-200 cursor-pointer">
              NextJS
            </span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-green-500">
              Supabase
            </span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 ">
              Redux
            </span>
            <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 ">
              TypeScript
            </span>
          </div>
          <div className="flex flex-col px-4 py-2 border-y text-gray-300">
            <h1 className="text-xl">ChatPDF</h1>
            <p className="text-lg">Chat and ask to AI about PDF</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-5 p-4 ">
            <Link
              href={"https://nextjs-study-saas.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
            >
              Live
              <Image
                src={logo}
                alt=""
                width={40}
                height={40}
                className="object-cover  "
              />
            </Link>
            <Link
              href={"https://github.com/Semihj/nextjs-study-saas"}
              target="_blank"
              rel="noopener noreferrer"
              className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
            >
              Github
              <FaGithub />
            </Link>
          </div>
        </div>
        
      </div>
      <div className="mt-10">
        <p className="text-4xl">
          <span className="text-purple-600">/</span>design to code
        </p>
      </div>
       <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-max  lg:p-2 py-5 mt-10  gap-10 justify-between ">
        <div className="flex flex-col max-w-sm ">
          <div className="border-slate-300 border flex flex-col h-max ">
            <div className="border-y border-slate-300 h-[200px] w-full relative ">
              <Image
                src={project5}
                alt=""
                fill
                className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
              <span className="hover:text-white transition-all duration-200 cursor-pointer">
                ReactJS+VITE
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 ">
                TypeScript
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-800 ">
                react-icons
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 ">
                TailwindCSS
              </span>
            </div>
            <div className="flex flex-col px-4 py-2 border-y text-gray-300">
              <h1 className="text-xl">TERE</h1>
              <p className="capitalize text-lg">Landing Page for TERE</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-5 p-4 ">
              <Link
                href={"https://tere-semih.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Live
                <Image
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover  "
                />
              </Link>
              <Link
                href={"https://github.com/Semihj/tere"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Github
                <FaGithub />
              </Link>
              <Link
                href={"https://www.figma.com/community/file/1342125588018806013/tere-project-website-design"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Figma
                <FaFigma/>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-sm ">
          <div className="border-slate-300 border flex flex-col h-max ">
            <div className="border-y border-slate-300 h-[200px] w-full relative ">
              <Image
                src={project6}
                alt=""
                fill
                className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
              <span className="hover:text-white transition-all duration-200 cursor-pointer">
                VITE
              </span>
              
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 ">
                TypeScript
              </span>
             
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 ">
                TailwindCSS
              </span>
            </div>
            <div className="flex flex-col px-4 py-2 border-y text-gray-300">
              <h1 className="text-xl">MNTN</h1>
              <p className="capitalize text-lg">Landing Page for MNTN</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-5 p-4 ">
              <Link
                href={"https://mntn-semih.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Live
                <Image
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover  "
                />
              </Link>
              <Link
                href={"https://github.com/Semihj/MNTN_landing"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Github
                <FaGithub />
              </Link>
              <Link
                href={"https://www.figma.com/community/file/788675347108478517/mntn-landing-page"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Figma
                <FaFigma/>
              </Link>
            </div>
          </div>
        </div>
     
        <div className="flex flex-col max-w-sm ">
          <div className="border-slate-300 border flex flex-col h-max ">
            <div className="border-y border-slate-300 h-[200px] w-full relative ">
              <Image
                src={project7}
                alt=""
                fill
                className="object-cover cursor-pointer hover:brightness-75 transition-all duration-300"
              />
            </div>

            <div className="flex flex-wrap gap-3 text-gray-400 px-4 text-2xl border-b py-2">
              <span className="hover:text-white transition-all duration-200 cursor-pointer">
                Firebase
              </span>
              
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-purple-600 ">
                ReactJS
              </span>
             
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-sky-500 ">
                TailwindCSS
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-red-500 ">
                Axios
              </span>
              <span className="hover:text-white transition-all duration-200 cursor-pointer text-yellow-500 ">
                react-router
              </span>
            </div>
            <div className="flex flex-col px-4 py-2 border-y text-gray-300">
              <h1 className="text-xl">Netflix</h1>
              <p className="capitalize text-lg">Clone Made with Firebase</p>
            </div>
            <div className="flex flex-wrap gap-2 lg:gap-5 p-4 ">
              <Link
                href={"https://netflix-semih.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Live
                <Image
                  src={logo}
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover  "
                />
              </Link>
              <Link
                href={"https://github.com/Semihj/netflix"}
                target="_blank"
                rel="noopener noreferrer"
                className=" w-max px-4 py-2 border text-2xl font-bold flex items-center gap-2 hover:bg-white hover:text-black duration-300 transition-all "
              >
                Github
                <FaGithub />
              </Link>
           
            </div>
          </div>
        </div>
     
      
        
      </div>
    </div>
  );
}
