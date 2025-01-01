import React from "react";
import forInstagram from "../assets/forInstagram.png";
export default function CardTestimony() {
  return (
    <div>
      <img
        src={forInstagram}
        className="object-cover h-auto max-h-[10rem] md:max-h-[12rem] lg:max-h-[18rem] xxl:max-h-[24rem] w-full md:h-auto"
      />
      <div className="p-3 xl:p-5 border-[1px] border-light_gray">
        <p className="mb-12 md:mb-14 lg:mb-[70px] xxl:mb-[150px] md:text-lg lg:text-2xl/[30px] xl:text-3xl/[40px] xxl:text-5xl/[60px]">
          "Abraham has a lot of potential and is a hard working person.
          Definitely the best person for your project"
        </p>
        <div className="text-light_gray text-base md:text-lg lg:text-xl xl:text-2xl xxl:text-4xl">
          <p className="font-bold">No One Yet</p>
          <p>Worker, Company A</p>
        </div>
      </div>
    </div>
  );
}
