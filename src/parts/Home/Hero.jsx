import Css from "./Hero.module.css";
import { gsap } from "gsap";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import cv from "../../assets/files/CV.pdf";
import abraham_kotak from "../../assets/abraham_kotak.webp";
import abraham_radial from "../../assets/abraham_radial.webp";
import { useGSAP } from "@gsap/react";
export default function Hero({ handleButtonHover }) {
  let heroHeaderTitle = "HI! I AM BRAM";
  let heroHeaderTextDetail = `I am a web entusiast, and I do have some experience in Netsuite Development. Also, I am a life long learner.`;
  const heroRef = useRef(null);
  useGSAP(
    () => {
      let timeline = gsap.timeline();

      timeline
        .fromTo(
          heroRef.current.querySelectorAll(".heroHeaderTitle"),
          { y: "-40%" },
          { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 }
        )
        .fromTo(
          heroRef.current.querySelectorAll(".heroHeaderTextDetail"),
          { y: "-40%" },
          { y: 0, opacity: 1, duration: 0.5, delay: 0.5, stagger: 0.2 },
          "-=1"
        )
        .fromTo(
          ".knowMeMoreText",
          { opacity: 0 },
          { opacity: 1, repeat: -1, duration: 2, repeatDelay: 1 }
        )
        .fromTo(
          ".callToActionArrow",
          { height: "0px" },
          { height: "70%", duration: 2, repeat: -1, repeatDelay: 1 },
          "<"
        );
    },
    { scope: heroRef }
  );
  return (
    <section id="hero" className="h-[100dvh]   text-white_tertiary" ref={heroRef}>
      <div className="h-full  bg-black px-3 md:px-5 lg:px-20 xl:px-36">
        <div className="flex h-full flex-col items-center ">
          <div className="grow md:grow-0 md:my-auto flex flex-col md:flex-col justify-evenly md:justify-center w-full md:space-y-[10%] lg:space-y-[5%]">
            <div className="flex flex-col md:flex-row md:justify-evenly xxl:justify-center gap-2 w-full">
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl xxl:text-[13rem] font-bold md:w-3/5 lg:w-[70%] xxl:w-[60%] -tracking-widest xxl:text-left">
                {heroHeaderTitle.split("").map((char, index) => {
                  if (char === "\n") {
                    return <br key={index} />;
                  }
                  return (
                    <span key={index} className="opacity-0 inline-block heroHeaderTitle">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </h1>
              <p className="text-xl lg:text-2xl font-semibold opacity-0 heroHeaderTextDetail md:w-2/5 lg:w-[30%] xxl:w-[31%] xxl:text-4xl flex items-center">
                {heroHeaderTextDetail}
              </p>
            </div>
            <div className="flex flex-col gap-2 md:gap-9 w-full items-end justify-end ">
              <div className="flex flex-col gap-2 md:flex-row-reverse justfiy-end md:justify-between xxl:justify-center xl:w-full">
                <h1 className="font-bold text-right -tracking-widest opacity-0 text-5xl md:text-7xl lg:text-8xl xl:text-9xl xxl:text-[13rem] md:w-[67%] lg:w-[74%] xxl:w-[60%] heroHeaderTextDetail">
                  WEB DEV LOVER
                </h1>
                <p className="text-xl lg:text-2xl xxl:text-4xl font-semibold w-3/4 self-end flex items-center md:w-[33%] h-full lg:w-[26%] xxl:w-[31%] opacity-0 heroHeaderTextDetail">
                  I am all about website. If you have idea, i have the means to manifest that! So,
                  contact me now.
                </p>
              </div>
              <button
                className="border-2	border-white_tertiary p-2 text-xl font-bold heroHeaderTextDetail opacity-0 relative"
                onMouseEnter={handleButtonHover}
              >
                <a className="buttonItemBottom" href="#contact">
                  <span className="inline-block">C</span>
                  <span className="inline-block">O</span>
                  <span className="inline-block">N</span>
                  <span className="inline-block">T</span>
                  <span className="inline-block">A</span>
                  <span className="inline-block">C</span>
                  <span className="inline-block">T</span>
                  <span className="inline-block">{`\u00A0`}</span>
                  <span className="inline-block">M</span>
                  <span className="inline-block">E</span>
                </a>
                <a className="buttonItemUpper absolute left-0 right-0 " href="#contact">
                  <span className="inline-block ">C</span>
                  <span className="inline-block ">O</span>
                  <span className="inline-block ">N</span>
                  <span className="inline-block ">T</span>
                  <span className="inline-block ">A</span>
                  <span className="inline-block ">C</span>
                  <span className="inline-block ">T</span>
                  <span className="inline-block ">{`\u00A0`}</span>
                  <span className="inline-block ">M</span>
                  <span className="inline-block ">E</span>
                </a>
              </button>
            </div>
          </div>
          <div className="h-[15%] w-full flex flex-col items-center md:self-end">
            <div>
              <p className="text-lg font-bold knowMeMoreText">know me more</p>
            </div>
            <div className=" bg-white w-[3px] callToActionArrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
