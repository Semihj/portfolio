import React from "react";

type Props = {};

function AboutMe({}: Props) {
  return (
    <div className="flex flex-col mt-20 w-full">
      <div className="flex   justify-between gap-5 ">
        <div className="flex items-center gap-2  ">
          <p className="text-2xl lg:text-4xl">
            <span className="text-purple-600">#</span>about_me
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full mt-5">
        <div className="w-full max-w-[400px] ">
        <p className="text-gray-300 text-lg">
          Hello! I'm Semih, a passionate self-taught front-end developer located
          in Türkiye. For the past couple of years, I've been driven by the desire to
          transform my programming skills into functional and
          user-friendly websites.
          <br/>
          <br/>
           <span>I enjoy building responsive sites from scratch and
          striving to learn the
          newest technologies and frameworks in software landscape.
          </span>
        </p>
        </div>
        <div className="w-full hidden lg:flex">
            
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
