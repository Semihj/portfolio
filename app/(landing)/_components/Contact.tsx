"use client"

import React, { useRef, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

type Props = {};

export default function Contact({}: Props) {

  return (
    <div id="contact" className="w-full flex flex-col mt-10 lg:mt-20 " >
      <div className="flex justify-between gap-5 ">
        <div className="flex items-center gap-2  ">
          <p className="text-2xl lg:text-4xl">
            <span className="text-purple-600">#</span>contacts
          </p>
        </div>
      </div>
      <div className="w-full py-5 lg:px-20 flex flex-col lg:flex-row lg:py-10 gap-5 justify-between ">
          <p className="max-w-lg text-gray-300 leading-7 text-2xl " >I'm open to work and interested in freelance opportunities. Also, if you have a question or request, don't be afraid to contact me. </p>
          <div className="border p-5 flex flex-col gap-4">
            <p className="text-2xl font-bold" >Message me here</p>
            <div className="flex gap-2 items-center">
              <CiMail size={20} />
              <p>semihszak@gmail.com</p>
            </div>
            <Link href={"https://www.instagram.com/sem1hdev/"} className="flex gap-2 items-center">
              <FaInstagramSquare size={20} />
              <p>semihj</p>
            </Link>
            <Link href={"https://www.linkedin.com/in/semih-sazak-329b88291"} className="flex gap-2 items-center">
              <FaLinkedin size={20} />
              <p>semih sazak</p>
            </Link>
          </div>
      </div>
     
    </div>
  );
}
