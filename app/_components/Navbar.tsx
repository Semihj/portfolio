"use client";

import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import logo from "@/public/logo.jpg";
import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-20 px-4 lg:px-20 lg:py-4 border-b justify-between items-center flex fixed bg-black z-100   ">
      <div className="flex gap-2 items-center"><h1 className="font-bold text-2xl cursor-pointer  ">Semih</h1>
      <Image src={logo} alt=""
      className="object-cover"
      width={50}
      height={50}
        />
    </div>  <div className="gap-10 mr-10 hidden lg:flex">
        <div className="">
          <Link href={"/"} className="text-purple-600 text-xl cursor-pointer ">
            #
            <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
              home
            </span>
          </Link>
        </div>
        <div className="">
          <Link href={"/#projects"} className="text-purple-600 text-xl cursor-pointer">
            #
            <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
              projects
            </span>
          </Link>
        </div>
        <div className="">
          <Link href={"/#about_me"} className="text-purple-600 text-xl cursor-pointer">
            #
            <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
              about_me
            </span>
          </Link>
        </div>
        <div className="">
          <Link href={"/#contact"} className="text-purple-600 text-xl cursor-pointer ">
            #
            <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
              contact
            </span>
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <HiOutlineBars3BottomRight
          className="text-2xl"
          onClick={() => setShow(true)}
        />
      </div>
      <div className="fixed top-0 right-0 transition-all z-100">
        <div
          className={`${
            show && "w-screen  z-100  "
          } h-screen bg-[#010d26]  w-0 transition-all duration-300  `}
        >
          {show && (
            <span
              onClick={() => setShow(false)}
              className="absolute top-5 right-5 text-2xl"
            >
              X
            </span>
          )}
          {show && (
            <div className="flex flex-col px-5 py-10  gap-5 w-full h-full">
              <h1 className="text-3xl font-bold">Semih</h1>
              <div className="flex flex-col gap-13">
                <div className="">
                  <Link href={"/"}  className="text-purple-600 text-2xl cursor-pointer " onClick={() => setShow(false) }>
                    #
                    <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
                      home
                    </span>
                  </Link>
                </div>
                <div className="">
                  <Link href={"/#projects"}  className="text-purple-600 text-2xl cursor-pointer" onClick={() => setShow(false) }>
                    #
                    <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
                      projects
                    </span>
                  </Link>
                </div>
                <div className="">
                  <Link href={"/#about-me"}  className="text-purple-600 text-2xl cursor-pointer" onClick={() => setShow(false) }>
                    #
                    <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
                      about_me
                    </span>
                  </Link>
                </div>
                <div className="">
                  <Link href={"/#contact"} className="text-purple-600 text-2xl cursor-pointer " onClick={() => setShow(false) } >
                    #
                    <span className="text-gray-400 hover:text-white hover:scale-125 transition-all">
                      contact
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full justify-center items-center flex gap-2 text-4xl mt-10">
                <Link href={"https://github.com/Semihj"} >
                  <FaGithub />
                </Link>
                <Link href={"https://www.instagram.com/sem1hdev/"}>
                  <FaInstagramSquare />
                </Link>
                <Link href={"https://x.com/semih_devv"}>
                  <FaSquareXTwitter />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
