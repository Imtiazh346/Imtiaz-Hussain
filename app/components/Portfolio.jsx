import React from "react";
import Link from "next/link";
import Image from "next/image";

import One from "/public/images/One.jpg";
import Two from "/public/images/Two.jpg";
import Three from "/public/images/Three.jpg";
import Four from "/public/images/Four.jpg";
import Five from "/public/images/Five.jpg";
import Six from "/public/images/Six.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full lg:h-screen py-4 mb-[70px]">
      <div className="max-w-[1240px] px-10 h-full w-full mx-auto ">
        <p className="text-[#fc9b4b] tracking-widest uppercase text-lg">
          Projects
        </p>
        <h1 className="text-2xl md:text-3xl text-left">What I've built</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-1 mt-[15px] place-items-center">
          {/* Repeat this block for each project */}
          <div className="relative group shadow-xl shadow-gray-400 rounded-xl ">
            <div
              className="relative bg-cover bg-center h-[300px] w-[400px] rounded-xl hover:rounded-xl"
              style={{ backgroundImage: `url(${One.src})` }}
            >
              {/* This div becomes visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-xl ">
                <div className="text-center">
                  <h3 className="tracking-wide text-2xl text-white">
                    Project One
                  </h3>
                  <p className="pb-4 pt-2 text-white">WordPress</p>
                  <a href="https://legalarch.org/">
                    <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group shadow-xl shadow-gray-400 rounded-xl ">
            <div
              className="relative bg-cover bg-center h-[300px] w-[400px] rounded-xl hover:rounded-xl"
              style={{ backgroundImage: `url(${Two.src})` }}
            >
              {/* This div becomes visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-xl ">
                <div className="text-center">
                  <h3 className="tracking-wide text-2xl text-white">
                    Project One
                  </h3>
                  <p className="pb-4 pt-2 text-white">WordPress</p>
                  <a href="https://legalarch.org/">
                    <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group shadow-xl shadow-gray-400 rounded-xl ">
            <div
              className="relative bg-cover bg-center h-[300px] w-[400px] rounded-xl hover:rounded-xl"
              style={{ backgroundImage: `url(${Three.src})` }}
            >
              {/* This div becomes visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-xl ">
                <div className="text-center">
                  <h3 className="tracking-wide text-2xl text-white">
                    Project One
                  </h3>
                  <p className="pb-4 pt-2 text-white">WordPress</p>
                  <a href="https://legalarch.org/">
                    <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group shadow-xl shadow-gray-400 rounded-xl ">
            <div
              className="relative bg-cover bg-center h-[300px] w-[400px] rounded-xl hover:rounded-xl"
              style={{ backgroundImage: `url(${Four.src})` }}
            >
              {/* This div becomes visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-xl ">
                <div className="text-center">
                  <h3 className="tracking-wide text-2xl text-white">
                    Project One
                  </h3>
                  <p className="pb-4 pt-2 text-white">WordPress</p>
                  <a href="https://legalarch.org/">
                    <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group shadow-xl shadow-gray-400 rounded-xl ">
            <div
              className="relative bg-cover bg-center h-[300px] w-[400px] rounded-xl hover:rounded-xl"
              style={{ backgroundImage: `url(${Five.src})` }}
            >
              {/* This div becomes visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-xl ">
                <div className="text-center">
                  <h3 className="tracking-wide text-2xl text-white">
                    Project One
                  </h3>
                  <p className="pb-4 pt-2 text-white">WordPress</p>
                  <a href="https://legalarch.org/">
                    <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group shadow-xl shadow-gray-400 rounded-xl ">
            <div
              className="relative bg-cover bg-center h-[300px] w-[400px] rounded-xl hover:rounded-xl"
              style={{ backgroundImage: `url(${Six.src})` }}
            >
              {/* This div becomes visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-xl ">
                <div className="text-center">
                  <h3 className="tracking-wide text-2xl text-white">
                    Project One
                  </h3>
                  <p className="pb-4 pt-2 text-white">WordPress</p>
                  <a href="https://legalarch.org/">
                    <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
                      Visit Site
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
