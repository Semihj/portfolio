import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
type Props = {}

const Socials = (props: Props) => {
  return (
    <div className='fixed left-5 top-0 hidden lg:flex flex-col items-center ' >
        <div className="bg-gray-600 w-[1px] h-[250px] ">

        </div>
        <div className="flex flex-col gap-3 mt-2">
            <Link href={"https://github.com/Semihj"} target="_blank" rel="noopener noreferrer"  >
            <FaGithub/>
            </Link>
            <Link href={"https://www.instagram.com/sem1hdev/"} target="_blank" rel="noopener noreferrer"  >
            <FaInstagramSquare/>
            </Link>
            <Link href={"https://x.com/semih_devv"} target="_blank" rel="noopener noreferrer"  >
            <FaSquareXTwitter/>
            </Link>
        </div>
    </div>
  )
}

export default Socials