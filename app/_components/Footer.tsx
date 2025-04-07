import React from "react";
import logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
type Props = {};

function Footer({}: Props) {
  return (
    <div className="py-5 lg:py-10 border-t border-gray-400 px-5 lg:px-40 flex flex-col w-full justify-between">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="" width={50} height={50} />
            <p className="text-lg">Semih</p>
            <p className="text-gray-400 ml-5">semihszak@gmail.com</p>
          </div>
          <p className="lg:pl-2">FullStack Web Developer</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Media</h1>
          <div className="flex gap-2 mt-4">
            <Link
              href={"https://github.com/Semihj"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href={"https://www.instagram.com/sem1hdev/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare />
            </Link>
            <Link
              href={"https://x.com/semih_devv"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center text-gray-300 mt-10 ">
        &copy; Copyright 2025. Made by Semih{" "}
      </div>
    </div>
  );
}

export default Footer;
