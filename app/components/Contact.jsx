import React from "react";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { HiChevronDoubleUp } from "react-icons/hi";
import { BsGithub, BsFillPersonLinesFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="h-screen w-full md:py-20 lg:py-40 mx-auto">
      <div className="max-w-[1240px] h-full w-full mx-auto">
        <p className="uppercase tracking-widest text-[#fc9b4b] text-lg px-5 lg:px-0">
          Contact
        </p>
        <h2 className="text-3xl px-5 lg:px-0">Let's Connect</h2>
        <div className="mx-auto py-8 px-4 md:px-0 md:grid grid-cols-3 grid-rows-1 gap-10">
          {/* left col */}
          <div className="px-5 rounded-xl shadow-lg shadow-gray-400 col-span-1">
            <img src="/images/contact.png" alt="" height={400} width={300} />
            <h1 className="uppercase text-left text-2xl md:text-3xl lg:text-4xl pt-8">
              Imtiaz Hussain
            </h1>
            <p className="pt-4">Front-End Developer</p>
            <p className="pt-8 pb-10">
              I am available for Wordpress, Shopify, and Next/React Js Services.
              Let's get connected
            </p>
            <p className="uppercase">Connect with me</p>
            <div className="flex justify-between items-center py-4">
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
          {/* right col */}
          <div className="py-16 lg:py-12 rounded-xl shadow-lg shadow-gray-400 col-span-2 ml-4 max-w-[600px]">
            <h3 className="py-6 px-3 text-2xl ">GET IN TOUCH</h3>
            <form action="">
              <div className="md:flex gap-8 md:pb-4 px-3 md:px-4">
                <div className="pb-2 md:pb-0">
                  <input
                    className="w-full py-2 px-2 rounded-xl  placeholder-slate-400 outline-none"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="py-2 md:py-0">
                  <input
                    className="w-full py-2 px-2 rounded-xl placeholder-slate-400 outline-none "
                    type="text"
                    placeholder="Number"
                  />
                </div>
              </div>
              <div className="py-2 px-3 md:px-4 md:py-4 lg:py-5 w-full">
                <input
                  className="w-full py-2 px-2 w-fulls rounded-xl placeholder-slate-400 outline-none"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="py-2 px-3 md:px-4 md:py-4 lg:py-5">
                <input
                  className="w-full py-2 px-2 w-fulls rounded-xl placeholder-slate-400 outline-none focus:outline-none focus:border-[#fc9b4b] "
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="py-2 px-3 md:px-4 md:py-4 lg:py-5">
                <textarea
                  className="w-full rounded-lg"
                  placeholder="Message"
                  rows={5}
                ></textarea>
              </div>
              <div className="grid place-content-center w-full">
                <button className=" border border-[#fc9b4b] py-2 px-3 rounded-lg hover:bg-[#fc9b4b] hover:text-white text-sm lg:text-lg hover:scale-100 ease-in duration-200">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center py-8">
          <Link href="/">
            <HiChevronDoubleUp
              size={30}
              className="cursor-pointer hover:text-[#fc9b4b] shadow-xl shadow-gray-400 rounded-lg "
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
