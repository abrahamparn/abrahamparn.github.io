import Css from "./Hero.module.css";
import { gsap } from "gsap";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import cv from "../../assets/files/CV.pdf";
import abraham_kotak from "../../assets/abraham_kotak.webp";
import abraham_radial from "../../assets/abraham_radial.webp";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  const app = useRef(null); // create a ref for the root level element (for scoping)

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.fromTo(".animateRight", { x: 300, opacity: 0 }, { opacity: 1, duration: 2, x: 0 });
    tl.fromTo(".animateLeft", { x: -300, opacity: 0 }, { opacity: 1, duration: 2, x: 0 }, 0);
    tl.fromTo(".animateBottom", { y: -300, opacity: 0 }, { opacity: 1, duration: 2, y: 0 }, 0);
  }, []);

  return (
    <section
      ref={app}
      className="bg-black h-screen text-white grid grid-cols-1 justify-center md:grid-cols-2 md:items-center md:gap-10 md:p-10 xl:gap-5 xl:p-20 "
    >
      <div className="flex justify-center  animateBottom overflow-x-hidden">
        <img className="hidden md:flex" loading="lazy" src={abraham_radial} alt="foto abraham" />
        <img
          className="flex md:hidden h-[90%] mt-10"
          loading="lazy"
          src={abraham_kotak}
          alt="foto abraham"
        />
      </div>
      <div className="overflow-x-hidden">
        <div className="flex flex-col gap-3 xl:gap-8 m-5 md:m-1 ">
          <h1 className="overflow-x-hidden animateRight text-2xl/[2rem] text-left md:text-2xl/[2.5rem] lg:text-4xl/[3rem] xl:text-[3.5rem]/[5rem] font-bold font-sen">
            I'm Abraham Naibrohu.
          </h1>
          <p className="overflow-x-hidden animateLeft text-2xl/[2rem] text-left md:text-2xl/[2.5rem] lg:text-4xl/[3rem] xl:text-[3.5rem]/[5rem] font-bold font-sen">
            I like coding.
          </p>
          <p className="overflow-x-hidden animateRight text-2xl/[2rem] text-light_gray text-left md:text-2xl/[2.5rem] lg:text-4xl/[3rem] xl:text-[3.5rem]/[5rem] font-bold font-sen">
            Based in Indonesia .
          </p>
          <p className=" overflow-x-hidden animateLeft text-left text-base/[1.5rem] md:text-lg/[1.75rem] lg:text-xl/[2rem] xl:text-2xl/[2.25rem]  font-sen">
            I'm the most passionate programmer you will ever get to work with. If you have a great
            project that needs some passionate coder, I'm your guy.
          </p>
          <div className="overflow-x-hidden flex justify-center mb-4 mt-4 animateRight">
            <a href={cv} target="_blank">
              <button className="font-sen text-base/[1.5rem] md:text-lg/[1.75rem] lg:text-xl/[2rem] xl:text-2xl/[2.25rem] p-2 border-2 border-yellow_custom text-yellow_custom hover:border-black_lighter hover:bg-yellow_custom hover:text-white active:text-yellow_custom active:bg-white">
                GET MY CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
