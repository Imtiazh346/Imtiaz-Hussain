"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaLinkedin } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={`fixed w-full h-20 z-[100] pl-4 pr-4 ${
        scrolled ? "bg-[#ecf0f3]" : ""
      }`}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
        <img src="/next.svg" alt="IMTIAZ" width={125} height={80} />
        <div className="">
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#home">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#portfolio">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <FaBars size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-[#333333] p-10 ease-in duration-500"
              : "fixed left-[-100%] ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-between items-center">
              <img src="/next.svg" alt="" width={87} height={35} />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-white"
              >
                <AiOutlineClose size={12} />
              </div>
            </div>
            <div className="border-b border-gray-300 py-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#home">
                <li className="py-4 text-sm"> Home</li>
              </Link>
              <Link href="#about">
                <li className="py-4 text-sm"> About</li>
              </Link>
              <Link href="#skills">
                <li className="py-4 text-sm"> Skills</li>
              </Link>
              <Link href="#portfolio">
                <li className="py-4 text-sm"> Projects</li>
              </Link>
              <Link href="#contact">
                <li className="py-4 text-sm"> Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaLinkedin size={18} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BsGithub size={18} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <BiLogoGmail size={18} />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500 ">
                  <BsFillPersonLinesFill size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
