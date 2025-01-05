import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperience() {
  let workExperienceRef = useRef(null);
  useGSAP(
    () => {
      let colors = [
        "rgb(220 38 38)",
        "rgb(15 118 110)",
        "rgb(190 24 93)",
        "rgb(77 124 15)",
        "rgb(91 33 182)",
      ];
      const items = workExperienceRef.current.querySelectorAll(".experience-item");
      const fillers = workExperienceRef.current.querySelectorAll(".experience-filler");
      const h2s = workExperienceRef.current.querySelectorAll(".experienceText");
      items.forEach((item, i) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          delay: i * 0.2,
        });
      });

      fillers.forEach((filler, i) => {
        let timeline = gsap.timeline();
        timeline.fromTo(
          filler,
          { height: 0 },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: filler,
              start: "top 40%",
              end: "bottom 20%",
              scrub: true,
            },
          }
        );
        timeline.fromTo(
          filler,
          { width: 0 },
          {
            width: "9px",
            ease: "none",
            scrollTrigger: {
              trigger: filler,
              start: "top 50%",
              toggleActions: "play none none reverse",
            },
            duration: 0.1,
          }
        );
      });

      h2s.forEach((item, i) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
          background: colors[i],
          duration: 1,
        });
      });

      //This is for 'experience' animation
      let timeline = gsap.timeline();
      timeline.to(".experienceBottomText", {
        y: "100%",
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        repeat: -1,
        repeatDelay: 1.5,
      });
      timeline.fromTo(
        ".experienceUpperText",
        { opacity: 0 },
        {
          y: "100%",
          duration: 0.5,
          stagger: 0.2,

          repeat: -1,
          opacity: 1,
          repeatDelay: 1.5,
        },
        "<"
      );
    },

    { scope: workExperienceRef }
  );
  return (
    <section
      id="workExperience"
      className="h-full bg-black text-white_tertiary"
      ref={workExperienceRef}
    >
      <div className="pt-24 mx-[10%] ">
        <div className="">
          <h2 className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl xxl:text-9xl font-bold mb-2">
            <span className="inline-block experienceBottomText">E</span>
            <span className="inline-block experienceBottomText">X</span>
            <span className="inline-block experienceBottomText">P</span>
            <span className="inline-block experienceBottomText">E</span>
            <span className="inline-block experienceBottomText">R</span>
            <span className="inline-block experienceBottomText">I</span>
            <span className="inline-block experienceBottomText">E</span>
            <span className="inline-block experienceBottomText">N</span>
            <span className="inline-block experienceBottomText">C</span>
            <span className="inline-block experienceBottomText">E</span>

            <div className="absolute top-[-100%]">
              <span className="inline-block experienceUpperText">E</span>
              <span className="inline-block experienceUpperText">X</span>
              <span className="inline-block experienceUpperText">P</span>
              <span className="inline-block experienceUpperText">E</span>
              <span className="inline-block experienceUpperText">R</span>
              <span className="inline-block experienceUpperText">I</span>
              <span className="inline-block experienceUpperText">E</span>
              <span className="inline-block experienceUpperText">N</span>
              <span className="inline-block experienceUpperText">C</span>
              <span className="inline-block experienceUpperText">E</span>
            </div>
          </h2>
          <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
            It ain't much, <br />
            but it's honest work
          </p>
        </div>
        {/* DATA DATA DATA */}
        <div className="mt-10 md:mt-12 xxl:mt-24 flex flex-col">
          <div className=" flex flex-row-reverse gap-5 xxl:gap-10 md:grid md:grid-cols-11">
            <div className="experience-item mb-10 xxl:mb-20 w-full md:col-span-5 md:col-start-1">
              <h2 className="experienceText text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl font-bold mb-2 xl:mb-3 xxl:mb-6">
                NETSUITE TECHNICAL CONSULTANT
              </h2>
              <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
                Hand Global Solutions
              </p>
              <p className="-mt-1 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl opacity-50 font-bold">
                April 2024 - NOW
              </p>
              <ul className="list-disc list-inside mt-2 xxl:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl">
                <li className="xxl:mt-4">Translates business requirements to netsuite solutions</li>
                <li className="xxl:mt-4">Integrates NetSuite with other systems</li>
                <li className="xxl:mt-4">Tech: SuiteScripts</li>
              </ul>
            </div>
            <div className="relative md:mx-auto md:col-span-1 col-start-6">
              <div className="flex items-center justify-center w-2 h-full">
                <div className="w-1 h-full  rounded-t-full "></div>
              </div>
              <div className="experience-filler absolute w-3 h-7 bg-white  border-white  top-0 left-1/2 translate-x-[-50%] "></div>
            </div>
          </div>

          <div className=" flex flex-row gap-5 xxl:gap-10 md:grid md:grid-cols-11">
            <div className=" relative md:col-span-1 md:mx-auto md:col-start-6">
              <div className="flex items-center justify-center w-2 h-full">
                <div className="w-1 h-full  rounded-t-full "></div>
              </div>
              <div className="experience-filler absolute w-3 h-7 bg-white  border-white  top-0 left-1/2 translate-x-[-50%] "></div>
            </div>
            <div className="experience-item mb-10 xxl:mb-20 w-full md:col-span-5 md:col-start-7">
              <h2 className="experienceText text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl font-bold mb-2 xl:mb-3 xxl:mb-6">
                WEB DEVELOPER
              </h2>
              <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
                WM DEVELOPER
              </p>
              <p className="-mt-1 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl opacity-50 font-bold">
                June 2023 - NOW
              </p>
              <ul className="list-disc list-inside mt-2 xxl:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl">
                <li className="xxl:mt-4">I create website however you like</li>
                <li className="xxl:mt-4">Tech: MERN & WordPress</li>
                <li className="xxl:mt-4">
                  link: <a href="https://wmdeveloper.com">wmdeveloper</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-row-reverse gap-5 xxl:gap-10 md:grid md:grid-cols-11">
            <div className="experience-item mb-10 xxl:mb-20 w-full md:col-span-5 md:col-start-1">
              <h2 className="experienceText text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl font-bold mb-2 xl:mb-3 xxl:mb-6">
                .NET DEVELOPER
              </h2>
              <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
                PT. Indomarco Prismatama
              </p>
              <p className="-mt-1 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl opacity-50 font-bold">
                November 2023 - April 2024
              </p>
              <ul className="list-disc list-inside mt-2 xxl:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl ">
                <li className="xxl:mt-4">Create multiple VB.NET apps</li>
                <li className="xxl:mt-4">Translates business requirements into solutions</li>
                <li className="xxl:mt-4">Tech: VB.NET & MySQL</li>
              </ul>
            </div>
            <div className="relative md:mx-auto md:col-start-6 md:col-span-1">
              <div className="flex items-center justify-center w-2 h-full">
                <div className="w-1 h-full  rounded-t-full "></div>
              </div>
              <div className="experience-filler absolute w-3 h-7 bg-white  border-white  top-0 left-1/2 translate-x-[-50%] "></div>
            </div>
          </div>

          <div className=" flex flex-row gap-5 xxl:gap-10 md:grid md:grid-cols-11">
            <div className=" relative md:mx-auto md:col-span-1 md:col-start-6">
              <div className="flex items-center justify-center w-2 h-full">
                <div className="w-1 h-full  rounded-t-full "></div>
              </div>
              <div className="experience-filler absolute w-3 h-7 bg-white  border-white  top-0 left-1/2 translate-x-[-50%] "></div>
            </div>
            <div className="experience-item mb-10 xxl:mb-20 w-full md:col-span-5 md:col-start-7">
              <h2 className="experienceText text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl font-bold mb-2 xl:mb-3 xxl:mb-6">
                SOFTWARE ENGINEER INTERN
              </h2>
              <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
                PT. Mattel Indonesia
              </p>
              <p className="-mt-1 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl opacity-50 font-bold">
                November 2022 - November 2023
              </p>
              <ul className="list-disc list-inside mt-2 xxl:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl">
                <li className="xxl:mt-4">Maintained existing systems</li>
                <li className="xxl:mt-4">Migrate VB.NET to viable solutions</li>
                <li className="xxl:mt-4">Tech: ASP.NET MVC, VB.NET, Power App, and Electron.js </li>
              </ul>
            </div>
          </div>

          <div className=" flex flex-row-reverse gap-5 xxl:gap-10 md:grid md:grid-cols-11">
            <div className="experience-item mb-10 xxl:mb-20 w-full md:col-span-5 md:col-start-1">
              <h2 className="experienceText text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl font-bold mb-2 xl:mb-3 xxl:mb-6">
                ANDROID DEVELOPER
              </h2>
              <p className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-6xl">
                Bangkit Academy - Tanamin
              </p>
              <p className="-mt-1 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl opacity-50 font-bold">
                Feburary 2022 - December 2022
              </p>
              <ul className="list-disc list-inside mt-2 xxl:mt-4 text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl ">
                <li className="xxl:mt-4">Developed mobile app using kotlin</li>
                <li className="xxl:mt-4">Top 15 teams out of 433 teams</li>
                <li className="xxl:mt-4">Won IDR 140Mio as funding</li>
              </ul>
            </div>
            <div className="relative md:mx-auto md:col-span-1 md:col-start-6">
              <div className="flex items-center justify-center w-2 h-full">
                <div className="w-1 h-full  rounded-t-full "></div>
              </div>
              <div className="experience-filler absolute w-3 h-7 bg-white  border-white  top-0 left-1/2 translate-x-[-50%] "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
