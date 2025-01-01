import React from "react";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-peach_custom px-8  flex flex-col justify-between gap-20 md:gap-10">
        <div>
          <h2 className=" text-left text-[32px] lg:text-4xl xl:text-5xl font-bold pt-11">
            {props.title}
          </h2>
          <p className="text-dark_gray pt-4 md:text-base/8 lg:text-lg/9 xl:text-2xl/10">
            {props.body}
          </p>
        </div>
        <div className="pb-10">
          <a
            className="underline underline-offset-[15px] lg:text-lg xl:text-2xl hover:text-yellow_custom"
            href="https://instagram.com/abraham_pn"
            target="_blank"
          >
            {props.linkTitle}
          </a>
        </div>
      </div>
      <img src={props.picture} className="object-cover h-auto max-h-[32rem] w-full md:h-auto" />
    </section>
  );
}
