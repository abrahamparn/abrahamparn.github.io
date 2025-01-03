import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../../components/ProjectCard";
import awardWinningClone from "../../assets/projects/awardWinningClone.png";
import duta8mengemudi from "../../assets/projects/duta8mengemudi.png";
import kedaiLantaiKayu from "../../assets/projects/kedaiLantaiKayu.png";
import mkstorejastip from "../../assets/projects/mkstorejastip.png";
import appleClone from "../../assets/projects/appleClone.png";
import WMDEVELOPER from "../../assets/projects/WMDEVELOPER.png";

export default function Project() {
  let projectRef = useRef(null);
  let projectSectionRef = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        pin: projectRef.current,
        trigger: projectSectionRef.current,
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <div id="projects">
      <section
        className="text-white p-5 lg:p-20 py-12 lg:py-20 grid grid-cols-1 gap-8 lg:gap-14 md:grid-cols-2 md:hidden"
        ref={projectSectionRef}
      >
        <div className="flex flex-col gap-5  ">
          <div className="sticky" ref={projectRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-8xl font-sen font-bold">
              MY PROJECTS
            </h2>
            <p className="text-base md:text-xl/9 lg:text-2xl/10 xl:text-3xl/[50px] xxl:text-6xl/[80px] text-light_gray ">
              Projects that I'have done so far.
            </p>
          </div>
        </div>

        <div className="columns-1 space-y-4 md:space-y-8">
          <ProjectCard
            pictureUrl={WMDEVELOPER}
            titleProject={"wmdeveloper"}
            descriptionProject={
              "A modern, simple, and seamless design for wmdeveloper. Made using react"
            }
            linkUrl={"https://www.wmdeveloper.com"}
          />
          <ProjectCard
            pictureUrl={appleClone}
            titleProject={"Apple Clone"}
            descriptionProject={
              "Cloning apple website to showcase that I am able to utilize gsap animation. Made using react"
            }
            linkUrl={"/"}
          />
          <ProjectCard
            pictureUrl={awardWinningClone}
            titleProject={"awad winning clone"}
            descriptionProject={
              "a clone to gaming website which is heavily animated. Made using react"
            }
            linkUrl={"https://abrahamnaiborhu.me/awards"}
          />
          <ProjectCard
            pictureUrl={kedaiLantaiKayu}
            titleProject={"kedai lantai kayu"}
            descriptionProject={
              "One of our client that sells interior wood flooring and vinly. Made using wordpress"
            }
            linkUrl={"https://www.kedailantaikayu.com"}
          />
          <ProjectCard
            pictureUrl={mkstorejastip}
            titleProject={"MkStore Jastip"}
            descriptionProject={
              "One of our client website that offers goods delivery service. Made using wordpress"
            }
            linkUrl={"https://www.mkstorejastip.com"}
          />
          <ProjectCard
            pictureUrl={duta8mengemudi}
            titleProject={"Duta 8 Mengemudi"}
            descriptionProject={
              "One of our client website that offers driving lessons. Made using wordpress"
            }
            linkUrl={"https://www.duta8mengemudi.com"}
          />
        </div>
      </section>
      <section
        className="text-white p-5 lg:p-20 py-12 lg:py-20  grid-cols-1 gap-8 lg:gap-14 md:grid-cols-2 hidden md:grid"
        ref={projectSectionRef}
      >
        <div className="flex flex-col gap-5">
          <div className="sticky" ref={projectRef}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-8xl font-sen font-bold text-center">
              MY PROJECTS
            </h2>
            <p className="text-base md:text-xl/9 lg:text-2xl/10 xl:text-3xl/[50px] xxl:text-6xl/[80px] text-light_gray text-center">
              Projects that I'have done so far.
            </p>
          </div>
        </div>

        <div className="columns-1 space-y-4 md:space-y-8">
          <ProjectCard
            pictureUrl={WMDEVELOPER}
            titleProject={"wmdeveloper"}
            descriptionProject={
              "A modern, simple, and seamless design for wmdeveloper. Made using react"
            }
            linkUrl={"https://www.wmdeveloper.com"}
          />
          <ProjectCard
            pictureUrl={appleClone}
            titleProject={"Apple Clone"}
            descriptionProject={
              "Cloning apple website to showcase that I am able to utilize gsap animation. Made using react"
            }
            linkUrl={"https://www.abrahamnaiborhu.com"}
          />
          <ProjectCard
            pictureUrl={awardWinningClone}
            titleProject={"awad winning clone"}
            descriptionProject={
              "a clone to gaming website which is heavily animated. Made using react"
            }
            linkUrl={"https://www.abrahamnaiborhu.com"}
          />
          <ProjectCard
            pictureUrl={kedaiLantaiKayu}
            titleProject={"kedai lantai kayu"}
            descriptionProject={
              "One of our client that sells interior wood flooring and vinly. Made using wordpress"
            }
            linkUrl={"https://www.kedailantaikayu.com"}
          />
          <ProjectCard
            pictureUrl={mkstorejastip}
            titleProject={"MkStore Jastip"}
            descriptionProject={
              "One of our client website that offers goods delivery service. Made using wordpress"
            }
            linkUrl={"https://www.mkstorejastip.com"}
          />
          <ProjectCard
            pictureUrl={duta8mengemudi}
            titleProject={"Duta 8 Mengemudi"}
            descriptionProject={
              "One of our client website that offers driving lessons. Made using wordpress"
            }
            linkUrl={"https://www.duta8mengemudi.com"}
          />
        </div>
      </section>
    </div>
  );
}
