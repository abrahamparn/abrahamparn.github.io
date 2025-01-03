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

function App() {
  const [navActive, setNavActive] = useState(false);
  const handleMenuOnClick = () => {
    setNavActive(!navActive);
  };

  //for nav animation
  const headerRef = useRef(null);

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

  const { contextSafe } = useGSAP();

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

  return (
    <main className="bg-white_tertiary relative">
      <header className="absolute w-full z-10" ref={headerRef}>
        <nav className="w-full flex flex-row justify-between p-5">
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Abraham_pn</p>
          <button className="text-3xl" onClick={handleMenuOnClick}>
            ☰
          </button>
        </nav>

        <div className="navBoxContainer h-[100dvh] w-screen z-20 absolute top-0 left-0 bg-white text-white_tertiary flex flex-col justify-between">
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
          <div className="navBox w-full bg-black_main h-[5%]"></div>
        </div>
        <div className="navContent h-[100dvh] w-screen z-30 absolute top-0 left-0 bg-transparent text-white_tertiary p-5 flex flex-col gap-3">
          <div className="w-full flex flex-row justify-between text-lg md:text-xl lg:text-2xl xl:text-3xl">
            <p className="navContentText">Abraham_pn</p>
            <button className="text-3xl navContentText" onClick={handleMenuOnClick}>
              X
            </button>
          </div>
          <div className="flex flex-col h-full ps-10 justify-between md:flex-row md:justify-around">
            <div className="flex flex-col justify-evenly text-3xl md:text-4xl lg:text-6xl xl:text-8xl gap-4 md:gap-0 font-bold">
              {/* Main Navigation Items */}
              <NavItem text="HOME" href="#home" onHover={handleNavItemHover} />
              <NavItem text="ABOUT" href="#about" onHover={handleNavItemHover} />
              <NavItem text="SKILLS" href="#skills" onHover={handleNavItemHover} />
              <NavItem text="EXPERIENCE" href="#experience" onHover={handleNavItemHover} />
              <NavItem text="PROJECT" href="#project" onHover={handleNavItemHover} />
              <NavItem text="CONTACT" href="#contact" onHover={handleNavItemHover} />
            </div>
            <div className="navContentTextBorder w-[1px] h-full bg-white_tertiary hidden md:flex"></div>
            <div className="md:flex md:justify-center md:text-xl lg:text-3xl xl:text-5xl">
              <div className="navContentTextBorder opacity-0 w-full border-t bg-white self-end md:hidden"></div>

              <div className="flex flex-row justify-evenly md:flex-col md:justify-center gap-2 lg:gap-10 font-bold">
                <div className="flex justify-center items-center">
                  <div className="navContentText">ABRAHAM_PN</div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-10">
                  <NavItem
                    text="INSTAGRAM"
                    href="https://www.instagram.com/abraham_pn"
                    onHover={handleNavItemHover}
                  />
                  <NavItem
                    text="GITHUB"
                    href="https://github.com/abrahamparn/"
                    onHover={handleNavItemHover}
                  />
                  <NavItem
                    text="LINKEDIN"
                    href="https://linkedin.com/in/abrahamnaiborhu"
                    onHover={handleNavItemHover}
                  />
                  <NavItem
                    text="WHATSAPP"
                    href="https://wa.me/+6281388302150"
                    onHover={handleNavItemHover}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="hero"></section>
    </main>
  );
}

export default App;
