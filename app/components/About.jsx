"use client";
import React, { useState } from "react";
import { Image } from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full">
      <div className="max-w-[1240px] h-full w-full md:grid md:grid-cols-2 md:py-2 m-auto ">
        <div className="px-3 md:px-3  md:py-0 mt-[30px] lg:mt-[60px]">
          <p className="uppercase tracking-widest text-[#fc9b4b] text-lg ">
            About
          </p>
          <h2 className="text-3xl py-2">Who Am I</h2>
          <h5>React.js (Front-End Development):</h5>
          <p className="py-2">
            I have substantial expertise in React.js, specializing in front-end
            development. I've built dynamic and responsive web applications,
            implementing user interfaces, and enhancing user experiences with
            efficient and scalable solutions.
          </p>
          <h5>WordPress (Content Management System):</h5>
          <p className="py-2 ">
            I've worked on creating and customizing websites, tailoring them to
            unique client requirements.I can do plugin integration, and ensuring
            SEO optimization, resulting in user-friendly and feature-rich
            WordPress websites that meet business objectives.
          </p>

          <h5>Shopify (E-Commerce Development):</h5>
          <p className="py-2 ">
            I've delved into theme customization, payment gateway integration,
            and optimizing the shopping experience for customers. My expertise
            ensures seamless and high-performing e-commerce solutions on
            Shopify.
          </p>
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
