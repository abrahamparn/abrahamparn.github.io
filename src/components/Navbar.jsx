import Css from "./Navbar.module.css";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useWindowScroll } from "react-use";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navContainerRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  const onEnter = ({ currentTarget }) => {
    gsap
      .timeline()
      .to(currentTarget, { fontSize: "2rem", duration: 0.2 })
      .to(".active", { backgroundColor: "black", duration: 0.2 });
  };

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const onLeave = ({ currentTarget }) => {
    gsap
      .timeline()
      .to(currentTarget, { fontSize: "1rem", backgroundColor: "black", duration: 0.2 })
      .to(".active", { backgroundColor: "#FF8A00", duration: 0.2 });
  };

  const [showNavBarSmall, setShowNavBarSmall] = useState(false);
  const tl = useRef(null);
  function showMenu() {
    console.log("clicked");
    if (!tl.current) {
      animate();
    } else {
      tl.current.reversed(!tl.current.reversed());
    }
  }

  const animate = () => {
    if (showNavBarSmall === false) {
      console.log("false");
      tl.current = gsap.timeline();
      tl.current
        .fromTo(
          ".toBeAnimated",
          { opacity: 0, zIndex: -1 },
          { opacity: 1, duration: 0.2, zIndex: 50 }
        )
        .from(".insertIntoAnimation", { x: 1000, ease: "power1.out", stagger: 0.1 })
        .fromTo(
          ".active",
          { backgroundColor: "bg-black" },
          { backgroundColor: "#FF8A00", duration: 0.1 }
        );
      setShowNavBarSmall(!showNavBarSmall); // Update the state after the animation
      // .from('.randomInsert', {x:random(-1000, 0)})
    } else if (showNavBarSmall === true) {
      console.log("false");
      tl.current = gsap.timeline({
        onComplete: () => {
          setShowNavBarSmall(!showNavBarSmall); // Update the state after the animation
        },
      });

      tl.current
        .fromTo(
          ".toBeAnimated",
          { opacity: 0, zIndex: -1 },
          { opacity: 1, duration: 0.2, zIndex: 50 }
        )
        .from(".insertIntoAnimation", { x: 1000, ease: "power1.out", stagger: 0.1 })
        .fromTo(
          ".active",
          { backgroundColor: "bg-black" },
          { backgroundColor: "#FF8A00", duration: 0.1 }
        );
    }
  };
  const xButtonRef = useRef(null);

  const handleOnClickNavLink = () => {
    let xButton = xButtonRef.current;
    xButton.click();
  };

  return (
    <>
      <div className=" bg-black font-sen text-bold fixed inset-x-0  z-50" ref={navContainerRef}>
        <div className="flex justify-between sm:ms-0 sm:me-0 md:ms-4 md:me-4 lg:ms-12 lg:me-12 xl:ms-20 xl:me-20 text-white">
          <div className="flex items-center p-6">
            <p className="font-bold text-lg">ABRAHAM P.N.</p>
          </div>

          <div className="justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col md:p-0 md:flex-row m-0 p-0">
              <li>
                <a
                  href="#experience"
                  className="block items-center p-6 hover:text-yellow_custom rand"
                >
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#projects" className="block items-center p-6 hover:text-yellow_custom">
                  WORK
                </a>
              </li>
              <li>
                <a href="#photography" className="block items-center p-6 hover:text-yellow_custom">
                  PHOTOGRAPHY
                </a>
              </li>
              <li className={`${Css.active} hover:bg-black_lighter `}>
                <a href="#contact" className="block items-center p-6 hover:text-yellow_custom">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div
            className="flex items-center justify-between md:hidden p-6 openAnimation"
            onClick={showMenu}
          >
            <span className="text-white text-xl">☰</span>
          </div>
        </div>
      </div>

      {/* Navbar for phone */}
      <div
        className={`toBeAnimated bg-black flex flex-col font-sen text-bold w-screen fixed top-0 left-0 h-screen  md:hidden ${
          showNavBarSmall ? " " : "hidden"
        }`}
      >
        <div className="flex flex-row justify-between">
          <div className="flex items-center p-6">
            <p className="font-bold text-lg text-yellow_custom">ABRAHAM P.N.</p>
          </div>
          <div className="flex items-center justify-between md:hidden p-6" onClick={showMenu}>
            <span className="text-yellow_custom text-xl" ref={xButtonRef}>
              ⛌
            </span>
          </div>
        </div>
        <div className="justify-between  w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col md:p-0 md:flex-row m-0 p-0">
            <li
              className={`${showNavBarSmall ? " " : "hidden"} insertIntoAnimation`}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={handleOnClickNavLink}
            >
              <a
                href="#experience"
                className="block items-center p-6 hover:text-yellow_custom text-white"
              >
                EXPERIENCE
              </a>
            </li>
            <li
              className={`${showNavBarSmall ? " " : "hidden"} insertIntoAnimation`}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={handleOnClickNavLink}
            >
              <a
                href="#projects"
                className="block items-center p-6 hover:text-yellow_custom text-white"
              >
                WORK
              </a>
            </li>
            <li
              className={`${showNavBarSmall ? " " : "hidden"} insertIntoAnimation`}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={handleOnClickNavLink}
            >
              <a
                href="#photography"
                className="block items-center p-6 hover:text-yellow_custom text-white"
              >
                PHOTOGRAPHY
              </a>
            </li>
            <li
              className={` hover:bg-black_lighter insertIntoAnimation`}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onClick={handleOnClickNavLink}
            >
              <a
                href="#contact"
                className="block items-center p-6 hover:text-yellow_custom text-white"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
