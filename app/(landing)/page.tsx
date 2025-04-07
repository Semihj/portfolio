import Image from "next/image";
import wp1 from "@/public/wp1.jpg";
import wp2 from "@/public/wp2.jpg";
import Home from "./_components/Home";
import Brightness from "../_components/Brightness";
import Projects from "./_components/Projects";


export default function Page() {
  return (
    <div className="flex flex-col w-full h-full">
      <Brightness top={0} left={0} color={"white"} position={"fixed"} />
      <Home/>
      <Projects/>
    </div>
  );
}
