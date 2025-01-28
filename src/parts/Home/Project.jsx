import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import awardWinningClone from "../../assets/projects/awardWinningClone.png";
import duta8mengemudi from "../../assets/projects/duta8mengemudi.png";
import kedaiLantaiKayu from "../../assets/projects/kedaiLantaiKayu.png";
import mkstorejastip from "../../assets/projects/mkstorejastip.png";
import appleClone from "../../assets/projects/appleClone.png";
import WMDEVELOPER from "../../assets/projects/WMDEVELOPER.png";
import sitonggiElektrikJaya from "../../assets/projects/sitonggiElektrikJaya.png";
import monpizza from "../../assets/projects/monpizza.png";
import conceptTwo from "../../assets/projects/conceptTwo.png";
gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const projectSectionRef = useRef(null);

  // This ratio helps with parallax calculations:
  let getRatio = (element) => window.innerHeight / (window.innerHeight + element.offsetHeight);

  useGSAP(
    () => {
      gsap.utils.toArray(".parallaxProject").forEach((section, i) => {
        const bgElement = section.querySelector(".parallax-bg");
        if (!bgElement) return;

        gsap.fromTo(
          bgElement,
          {
            backgroundPosition: () => "50% 0px",
          },
          {
            backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
              // markers: true,
            },
          }
        );
      });
    },
    { scope: projectSectionRef }
  );

  return (
    <section
      id="project"
      className="h-full min-h-[100dvh] px-5 md:px-10 bg-black text-white"
      ref={projectSectionRef}
    >
      {/* Intro Text */}
      <div className="w-full  pt-12 xxl:pt-20 flex flex-col gap-3 xxl:gap-10">
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-9xl">
          PROJECTS
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
          Hey! These are the web projects that I have made
        </p>
      </div>

      {/* Grid of parallax sections */}
      <div className="grid grid-cols-2 gap-5 space-y-3 md:gap-10 pt-10 md:pt-16">
        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${conceptTwo})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              Concept Website
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://abrahamnaiborhu.me/conceptTwo"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>
        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${awardWinningClone})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              Award Copy
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://abrahamnaiborhu.me/awards"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>

        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${monpizza})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              Mon Pizza
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://abrahamnaiborhu.me/monpizza"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>

        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${duta8mengemudi})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              Duta 8 Mengemudi
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://duta8mengemudi.com/"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>

        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${mkstorejastip})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              MK Store
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://mkstorejastip.com/"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>

        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${sitonggiElektrikJaya})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              Elektrik Jaya
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://abrahamnaiborhu.me/sitonggi_elektrik_jaya/"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>

        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${WMDEVELOPER})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              WM Developer
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://wmdeveloper.com/"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>

        <div className="parallaxProject relative flex justify-center items-center">
          <div
            className="parallax-bg h-[20vh] md:h-[30vh] lg:h-[45vh] xl:h-[60vh] w-full  opacity-30 border-gray-600 border-4 md:border-[10px] lg:border-[12px]  xxl:border-[22px] bg-cover bg-center rounded-lg xxl:rounded-2xl"
            style={{ backgroundImage: `url(${kedaiLantaiKayu})` }}
          ></div>
          <div className="absolute flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-9 xxl:gap-12">
            <h3 className=" text-white font-bold text-base md:text-3xl lg:text-4xl xl:text-5xl xxl:text-7xl text-center">
              Kedai Lantai Kayu
            </h3>
            <div className="flex justify-center items-center">
              <a
                href="https://kedailantaikayu.com/"
                className="block w-20 md:w-[10rem] lg:w-[12rem] xl:w-[16rem] xxl:w-[24rem] text-center self-center bg-white text-black_main text-sm md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl font-semibold  rounded-lg md:rounded-xl xl:rounded-2xl py-1 xl:py-4 xxl:py-8"
              >
                CHECK ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
