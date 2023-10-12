"use client";
import React, { useState } from "react";
import { Image } from "next/image";

const About = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1240px] h-full w-full md:grid md:grid-cols-2 md:py-2 m-auto ">
        <div className="px-3 md:px-3  md:py-0 mt-[30px] lg:mt-[60px]">
          <p className="uppercase tracking-widest text-[#fc9b4b] text-lg ">
            About
          </p>
          <h2 className="text-3xl py-2">Who Am I</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum
            mollitia consectetur dignissimos suscipit porro cumque cupiditate?
            Nemo, beatae rem.
          </p>
          <p className="py-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum
            mollitia consectetur dignissimos suscipit porro cumque cupiditate?
            Nemo, beatae rem.
          </p>
          <a href="#">
            <p className="py-2 cursor-pointer">
              Check Out of My Latest Projects
            </p>
          </a>
        </div>
        <div className="h-full w-full m-auto shadow-xl lg:shadow-none shadow-gray-400 rounded-xl p-4 mb-[70px] hover:scale-105 ease-in duration-300 ">
          <img
            className="lg:h-[70%] mx-auto rounded-2xl "
            src="/images/My Snap.jpg"
            alt="Imtiaz Hussain Image is missing"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
