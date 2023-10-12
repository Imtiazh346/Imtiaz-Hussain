import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill, BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const HeroSection = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[330px]  sm:max-w-[500px] lg:max-w-[700px] h-full mx-auto p-2 flex items-center justify-center flex-col m-auto">
        <div>
          <p className="uppercase text-[14px] md:text-[15] lg:text-[18] ">
            Let's build something legendary
          </p>
          <h1 className="py-2 md:py-4 text-gray-700 text-3xl md:text-4xl lg:text-5xl">
            Hi, I'm{" "}
            <span className="text-[#fc9b4b] text-3xl md:text-4xl lg:text-5xl">
              Imtiaz
            </span>
          </h1>
          <h1 className="py-2 md:py-4 text-gray-700 text-3xl md:text-4xl lg:text-5xl">
            A Front-End Web developer
          </h1>
          <p className="py-2 md:py-4 text-gray-600 text-center text-[14px] md:text-[15] lg:text-[18] ">
            Experienced Front-end developer having expertise in React/Next Js,
            WordPress and Shopify developments adept at crafting high quality
            web solutions. Skilled in front-end development in react js with a
            track record of delivering impactful projects and ensuring client
            satisfaction through timely execution.
          </p>
          <div className="max-w-[330px] flex justify-between items-center m-auto mt-4 text-[#fc9b4b] text-[20px]">
            <div className="rounded-full shadow-md shadow-gray-400 p-4 sm:p-5  lg:p-6 cursor-pointer hover:scale-110 ease-in duration-500">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-5  lg:p-6  cursor-pointer hover:scale-110 ease-in duration-500">
              <BsGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-5  lg:p-6  cursor-pointer hover:scale-110 ease-in duration-500">
              <BiLogoGmail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 sm:p-5  lg:p-6  cursor-pointer hover:scale-110 ease-in duration-500">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
