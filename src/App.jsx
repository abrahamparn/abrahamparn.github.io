import { useState, useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Lenis from "@studio-freight/lenis";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./views/Home";
import { useGSAP } from "@gsap/react";
import NavItem from "./components/NavItem";
import Hero from "./parts/Home/Hero";
import WorkExperience from "./parts/Home/WorkExperience";
import Contact from "./components/Contact";
import Skillset from "./parts/Home/Skillset";

function App() {
  //MAIN CONTEXT
  const { contextSafe } = useGSAP();

  //NAV ANIMATION
  const [navActive, setNavActive] = useState(false);
  const headerRef = useRef(null);
  const handleMenuOnClick = () => {
    setNavActive(!navActive);
  };
  useGSAP(
    () => {
      let timeline = gsap.timeline({ defaults: { ease: "power1.inOut" } });
      let span = headerRef.current.querySelectorAll("span");
      span.forEach((item) => {
        item.style.display = "inline-block";
      });

      // set nav to be seen
      if (navActive) {
        timeline
          .to([".navContent", ".navBoxContainer"], { x: "0" })
          .to(headerRef.current.querySelector(".navContent"), { left: "0", duration: 0 })
          .to(headerRef.current.querySelector(".navBoxContainer"), {
            left: "0",
            duration: 0.05,
          })
          .to(headerRef.current.querySelectorAll(".navBox"), {
            width: "100%",
            duration: 0.3,
            stagger: 0.05,
          })
          .fromTo(
            headerRef.current.querySelectorAll(".navContentText"),
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 },
            "-=1"
          )
          .fromTo(
            headerRef.current.querySelectorAll(".navContentTextBorder"),
            { scaleX: 0 },
            { scaleX: 1, opacity: 1, duration: 1 },
            "-=0.5"
          );
      }
      //set nav to not be seen
      if (!navActive) {
        timeline
          .fromTo(
            headerRef.current.querySelectorAll(".navContentTextBorder"),
            { scaleX: 1 },
            { scaleX: 0, opacity: 0, duration: 0.5 }
          )
          .fromTo(
            headerRef.current.querySelectorAll(".navContentText"),
            { y: 0, opacity: 1 },
            { y: -20, opacity: 0, duration: 0.2, stagger: 0.1, reversed: true },
            "-=0.4"
          )
          .to(headerRef.current.querySelector(".navContent"), {
            left: "-100vw",
            duration: 0.01,
          })
          .to(
            headerRef.current.querySelectorAll(".navBox"),
            {
              width: "0",
              duration: 0.3,
              stagger: 0.05,
              reversed: true,
            },
            "-=0.5"
          )
          .to(headerRef.current.querySelector(".navBoxContainer"), {
            left: "-100vw",
            duration: 0.1,
          });
      }
    },
    { scope: headerRef, dependencies: [navActive] }
  );
  const handleNavItemHover = contextSafe((e) => {
    const item = e.currentTarget;

    const navItemBottom = item.querySelectorAll(".navItemBottom span");
    const navItemUpper = item.querySelectorAll(".navItemUpper span");

    let timeline = gsap.timeline();
    timeline.fromTo(
      navItemBottom,
      { y: 0, opacity: 1 },
      { y: "40%", opacity: 0, duration: 0.3, stagger: 0.2 }
    );
    timeline.fromTo(
      navItemUpper,
      { y: 0, opacity: 0 },
      { y: "40%", opacity: 1, duration: 0.3, stagger: 0.2 },
      "<"
    );

    timeline.restart();
  });

  const handleButtonHover = contextSafe((e) => {
    const item = e.currentTarget;

    const buttonItemButton = item.querySelectorAll(".buttonItemBottom span");
    const buttonItemUpper = item.querySelectorAll(".buttonItemUpper span");

    let timeline = gsap.timeline();
    timeline.fromTo(
      buttonItemButton,
      { y: 0, opacity: 1 },
      { y: "40%", opacity: 0, duration: 0.3, stagger: 0.2 }
    );
    timeline.fromTo(
      buttonItemUpper,
      { y: "-80%", opacity: 0 },
      { y: "0", opacity: 1, duration: 0.3, stagger: 0.2 },
      "<"
    );
    timeline.restart();
  });

  //HERO ANIMATION

  return (
    <main className="relative">
      <Navbar
        headerRef={headerRef}
        handleMenuOnClick={handleMenuOnClick}
        handleNavItemHover={handleNavItemHover}
      />

      <Hero handleButtonHover={handleButtonHover} />
      <Skillset />
      <WorkExperience />
      <Contact />
    </main>
  );
}

export default App;
