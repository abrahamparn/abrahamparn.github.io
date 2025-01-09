import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import instagram from "../assets/navIcons/icons8-instagram-250.svg";
import github from "../assets/navIcons/icons8-github-250.svg";
import linkedin from "../assets/navIcons/icons8-linkedin-250.svg";
import whatsapp from "../assets/navIcons/icons8-whatsapp-250.svg";

export default function Navbar({ headerRef, handleMenuOnClick, handleNavItemHover, navActive }) {
  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      headerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      headerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      headerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(headerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible && !navActive]);

  return (
    <header className="fixed w-full z-10" ref={headerRef}>
      <nav className="w-full flex flex-row justify-between px-10 py-5 text-white_tertiary ">
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl">Abraham_pn</p>
        <button className="text-3xl" onClick={handleMenuOnClick}>
          ☰
        </button>
      </nav>

      <div className="navBoxContainer h-[100dvh] w-screen z-20 absolute top-0 left-0 bg-transparent text-white_tertiary flex flex-col justify-between">
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
        <div className="w-full flex flex-row justify-between text-lg md:text-xl lg:text-2xl xl:text-3xl px-5">
          <p className="navContentText">Abraham_pn</p>
          <button className="text-3xl navContentText" onClick={handleMenuOnClick}>
            X
          </button>
        </div>
        <div className="flex flex-col h-full ps-10 justify-between md:flex-row md:justify-around">
          <div className="flex flex-col justify-evenly text-3xl md:text-4xl lg:text-6xl xl:text-8xl gap-4 md:gap-0 font-bold">
            {/* Main Navigation Items */}
            <NavItem
              text="HOME"
              href="#hero"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            />
            {/* <NavItem
              text="ABOUT"
              href="#about"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            /> */}
            <NavItem
              text="SKILLS"
              href="#skills"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            />
            <NavItem
              text="EXPERIENCE"
              href="#workExperience"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            />

            <NavItem
              text="PROJECT"
              href="#project"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            />
            <NavItem
              text="CONTACT"
              href="#contact"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            />
          </div>
          <div className="navContentTextBorder w-[1px] h-full bg-white_tertiary hidden md:flex"></div>
          <div className="md:flex md:justify-center md:text-xl md:h-full lg:text-3xl xl:text-5xl h-20 ">
            <div className="navContentTextBorder opacity-0 w-full border-t bg-white self-end md:hidden"></div>

            <div className="flex flex-row justify-evenly md:flex-col md:justify-center gap-2 lg:gap-10 font-bold mt-5">
              <div className="flex flex-row md:flex-col gap-5 md:gap-10 lg:gap-14 xxl:gap-28">
                <div className="navContentText " onClick={handleMenuOnClick}>
                  <a href={"https://instagram.com/abraham_pn"} rel="noopener noreferrer">
                    <img src={instagram} className="w-10 md:w-16 lg:w-[4.5rem] xl:w-24 xxl:w-44 " />
                  </a>
                </div>
                <div className="navContentText " onClick={handleMenuOnClick}>
                  <a href={"https://github.com/abrahamparn/"} rel="noopener noreferrer">
                    <img src={github} className="w-10 md:w-16 lg:w-[4.5rem] xl:w-24 xxl:w-44" />
                  </a>
                </div>
                <div className="navContentText " onClick={handleMenuOnClick}>
                  <a href={"https://linkedin.com/in/abrahamnaiborhu"} rel="noopener noreferrer">
                    <img src={linkedin} className="w-10 md:w-16 lg:w-[4.5rem] xl:w-24 xxl:w-44" />
                  </a>
                </div>
                <div className="navContentText " onClick={handleMenuOnClick}>
                  <a href={"https://wa.me/+6281388302150"} rel="noopener noreferrer">
                    <img src={whatsapp} className="w-10 md:w-16 lg:w-[4.5rem] xl:w-24 xxl:w-44" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
