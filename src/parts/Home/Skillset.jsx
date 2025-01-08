import React, { useEffect, useReducer, useRef } from "react";
import kotlin from "../../assets/skillset/kotlin.svg";
import net from "../../assets/skillset/net.svg";
import netSuite from "../../assets/skillset/netsuite.svg";
import node from "../../assets/skillset/node.svg";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skillset() {
  const skillRef = useRef();

  useGSAP(
    () => {
      const text = new SplitType("#skillTitle", { types: " chars" });
      let timeline = gsap.timeline({
        scrollTrigger: {
          trigger: skillRef.current,
          start: "10% 60%",
          end: "bottom 50%+=100px",
          toggleActions: "play none none reverse",
        },
      });
      timeline.set(["#skillTitle", ".skillDescription"], {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      });
      timeline.fromTo(
        ".char",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          repeat: -1,
          repeatDelay: 4,
        }
      );
      timeline.fromTo(
        ".skillDescription",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        "<"
      );

      gsap.fromTo(
        ".skillComponent",
        { x: "-100vw" },
        {
          x: 0,
          stagger: 0.3,
          duration: 1,
          scrollTrigger: {
            trigger: ".skillComponent",
            start: "top 70%",
            toggleActions: "play none none reverse",
            //         markers: true,
          },
        }
      );

      let arrowTimeline = gsap.timeline();

      arrowTimeline.fromTo(
        ".skillScrollToAction",
        {
          scrollTrigger: {
            trigger: skillRef.current,
            start: "60% 60%",
            end: "bottom 50%+=100px",
            toggleActions: "play none none reverse",

            //   markers: true,
          },
          opacity: 0,
        },
        { opacity: 1, duration: 2, ease: "power2.inOut", repeat: -1 }
      );

      arrowTimeline.fromTo(
        ".arrowGoToDown",
        { opacity: 1 },
        { duration: 2, repeat: -1, opacity: 0, y: 50 },
        "<"
      );
    },
    { scope: skillRef }
  );

  return (
    <section id="skills" className="h-[100dvh] bg-black" ref={skillRef}>
      <div className="h-full px-5 xl:px-20 pt-7 md:pt-0 flex flex-col justify-evenly">
        <div className="w-full flex flex-col justify-center items-center text-white md:gap-4 lg:gap-5">
          <h2
            id="skillTitle"
            className="w-full text-center target font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl xxl:text-9xl -tracking-widest"
          >
            SKILLS
          </h2>
          <div>
            <p className="skillDescription text-center md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl leading-tight">
              While i love web development, i have experiences in other places too.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly gap-10 text-white">
          <div className="netsuite md:flex md:flex-col md:gap-4 skillComponent">
            <div className="flex flex-row items-center gap-3">
              <img src={netSuite} className="h-8 lg:h-10 xl:h-14" />
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl mb-1">
                Netsuite
              </h2>
            </div>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl text-light_gray leading-tight">
              I've got some experience in migrating ERP to Netsuite and customizing Netsuite.
            </p>
          </div>

          <div className="mern md:flex md:flex-col md:gap-4 skillComponent">
            <div className="flex flex-row items-center gap-3">
              <img src={node} className="h-8 lg:h-10 xl:h-14" />
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl mb-1">
                Fullstack JS
              </h2>
            </div>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl text-light_gray leading-tight">
              Hey! my passion is in this one. Scroll down to projects and see what I have made.
            </p>
          </div>

          <div className="net md:flex md:flex-col md:gap-4 skillComponent">
            <div className="flex flex-row items-center gap-3">
              <img src={net} className="h-8 lg:h-10 xl:h-14" />
              <h2 className="font-semibold text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl mb-1">
                .NET
              </h2>
            </div>
            <p className="text-base md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl text-light_gray leading-tight">
              I've also got some experience in making vb.net or asp.net mvc projects or both.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-white">
          <div className="md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl skillScrollToAction">
            See all my projects
          </div>
          <div className=" ">
            <div className="flex flex-row arrowGoToDown">
              <div className="w-16 lg:w-24 xxl:w-48 bg-white h-2 xxl:h-4 rotate-[50deg]  translate-x-[21%] lg:translate-x-[20%] translate-y-4  lg:translate-y-7 xxl:translate-y-16 "></div>
              <div className="w-16 lg:w-24 xxl:w-48 bg-white h-2 xxl:h-4 -rotate-[50deg] -translate-x-[21%] lg:-translate-x-[20%] translate-y-4 lg:translate-y-7 xxl:translate-y-16 "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
