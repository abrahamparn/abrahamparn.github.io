import React, { useState, useEffect, useRef } from "react";
import NavItem from "./NavItem";
export default function Navbar({ headerRef, handleMenuOnClick, handleNavItemHover }) {
  return (
    <header className="fixed w-full z-10" ref={headerRef}>
      <nav className="w-full flex flex-row justify-between px-10 py-5 text-white_tertiary">
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
              text="EXPERIENCE"
              href="#workExperience"
              onHover={handleNavItemHover}
              handleMenuOnClick={handleMenuOnClick}
            />
            <NavItem
              text="SKILLS"
              href="#skills"
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
  );
}
