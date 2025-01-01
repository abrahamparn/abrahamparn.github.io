import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IconContext } from "react-icons";
import { RiNumber0 } from "react-icons/ri";
import { RiNumber1 } from "react-icons/ri";
import { RiNumber2 } from "react-icons/ri";
import { RiNumber3 } from "react-icons/ri";
import { RiNumber4 } from "react-icons/ri";
import { RiNumber5 } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperience() {
  const number = useRef(null);
  const titleWorkExperienceRef = useRef(null);
  const workExperienceSectionRef = useRef(null);
  const descriptionWorkExperienceRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: workExperienceSectionRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(titleWorkExperienceRef.current, { x: -300 }, { x: 0, duration: 1 })
      .fromTo(descriptionWorkExperienceRef.current, { x: -1000 }, { x: 0, duration: 1 }, "0")
      .fromTo(".animateWork", { opacity: 0 }, { opacity: 1, duration: 1.5, stagger: 0.3 }, "<0.5");
  }, []);

  return (
    <section
      id="experience"
      className="bg-black_lighter flex flex-col px-5 py-16 md:px-10 lg:px-14 xl:px-20 font-sen text-white"
      ref={workExperienceSectionRef}
    >
      <p ref={titleWorkExperienceRef} className="text-white text-base md:text-xl">
        WORK EXPERIENCE
      </p>
      <p
        className="text-4xl md:text-5xl mb-4 font-bold font-sen"
        ref={descriptionWorkExperienceRef}
      >
        Experience that I have gained so far.
      </p>

      {/* Updated Layout: Flex Column to Grid Columns on Large Screens */}
      <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-16" ref={number}>
        {/* First Card */}
        <div className="flex flex-col gap-2 animateWork">
          <div className="flex flex-row">
            <IconContext.Provider value={{ color: "white", size: "5rem" }}>
              <div>
                <RiNumber1 />
              </div>
            </IconContext.Provider>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            <span className="text-pink_custom">Hand Global</span>, Netsuite Technical{" "}
            <span className="text-pink_custom">- NOW</span>
          </h2>
          <p className="text-lg md:text-base">
            Integrated NetSuite with other ERP systems to enhance functionality, streamline
            operations, and provided technical support and training for new features.
          </p>
        </div>

        {/* Second Card */}
        <div className="flex flex-col gap-2 animateWork">
          <div className="flex flex-row">
            <IconContext.Provider value={{ color: "white", size: "5rem" }}>
              <div>
                <RiNumber2 />
              </div>
            </IconContext.Provider>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            <span className="text-green_custom">Mattel</span>, Software Engineer Intern
          </h2>
          <p className="text-lg md:text-base">
            Created and maintained internal software using VB.NET, Electron.js, ASP.NET MVC (C# and
            VB), Python, SSMS, Microsoft Power Technologies, etc.
          </p>
        </div>

        {/* Third Card */}
        <div className="flex flex-col gap-2 animateWork">
          <div className="flex flex-row">
            <IconContext.Provider value={{ color: "white", size: "5rem" }}>
              <div>
                <RiNumber3 />
              </div>
            </IconContext.Provider>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            <span className="text-blue_custom">Tanamin</span>, Co-founder and Mobile Developer
          </h2>
          <p className="text-lg md:text-base">
            Co-founded the startup and served as the mobile developer with funding from both Google
            and the government, totaling IDR 140 million.
          </p>
        </div>

        {/* Fourth Card */}
        <div className="flex flex-col gap-2 animateWork">
          <div className="flex flex-row">
            <IconContext.Provider value={{ color: "white", size: "5rem" }}>
              <div>
                <RiNumber4 />
              </div>
            </IconContext.Provider>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            <span className="text-yellow_custom">Bangkit Academy</span>, Android Learning Path
          </h2>
          <p className="text-lg md:text-base">
            Selected from 63k+ applicants to join Bangkit Academy 2022 in the Mobile Development
            learning path. Graduated with distinction with a score of 98.5.
          </p>
        </div>

        <div className="flex flex-col gap-2 animateWork">
          <div className="flex flex-row">
            <IconContext.Provider value={{ color: "white", size: "5rem" }}>
              <div>
                <RiNumber5 />
              </div>
            </IconContext.Provider>
          </div>
          <h2 className="text-xl md:text-2xl font-bold">
            <span className="text-red-500">WMDeveloper</span>, Website Developer{" "}
            <span className="text-violet_custom">- Now</span>
          </h2>
          <p className="text-lg md:text-base">
            A website agency that can create any website for any business requirements. Visit the
            website at{" "}
            <a href="https://wmdeveloper.com" className="text-yellow_custom hover:text-blue_custom">
              wmdeveloper.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
