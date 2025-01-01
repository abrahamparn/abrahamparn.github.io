import React from "react";
import abraham_radial from "../assets/abraham_radial_Square.png";
export default function ProjectCard({ linkUrl, descriptionProject, titleProject, pictureUrl }) {
  return (
    <div className="bg-black flex justify-center">
      <div className="max-w-xl bg-black_lighter">
        <img src={pictureUrl} className="max-w-sm md:max-w-md lg:max-lg xl:max-w-xl" />
        <div className="pb-6 pt-6 ps-5 pe-5 flex flex-col gap-2 xl:gap-4 xxl:gap-6 font-sen">
          <p className="text-xl lg:text-2xl xl:text-3xl xxl:text-4xl text-white font-bold">
            {titleProject}
          </p>
          <p className="text-light_gray lg:text-xl xl:text-2xl xxl:text-3xl">
            {descriptionProject}
          </p>
          <p>
            Link:{" "}
            <a href={linkUrl} className="text-yellow_custom hover:text-gray-500">
              {titleProject}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
