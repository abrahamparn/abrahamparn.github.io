import React from "react";
import _1 from "../../assets/pictures/1.jpeg";
import _2 from "../../assets/pictures/2.jpeg";
import _3 from "../../assets/pictures/3.jpeg";
import _4 from "../../assets/pictures/4.jpeg";
import _5 from "../../assets/pictures/5.jpeg";
import _6 from "../../assets/pictures/6.jpeg";
import _7 from "../../assets/pictures/7.jpeg";
import _8 from "../../assets/pictures/8.jpeg";
import _9 from "../../assets/pictures/9.jpeg";
import _10 from "../../assets/pictures/10.jpeg";
import _11 from "../../assets/pictures/11.jpeg";
import _12 from "../../assets/pictures/12.jpeg";
import _13 from "../../assets/pictures/13.jpeg";
import _14 from "../../assets/pictures/14.jpeg";
import _15 from "../../assets/pictures/15.jpeg";
import _16 from "../../assets/pictures/16.jpeg";
import _17 from "../../assets/pictures/17.jpeg";
import _18 from "../../assets/pictures/18.jpeg";
import _19 from "../../assets/pictures/19.jpeg";
import _20 from "../../assets/pictures/20.jpeg";
import _21 from "../../assets/pictures/21.jpeg";
import _22 from "../../assets/pictures/22.jpeg";
import _23 from "../../assets/pictures/23.jpeg";
import _24 from "../../assets/pictures/24.jpeg";
import _25 from "../../assets/pictures/25.jpeg";
import _26 from "../../assets/pictures/26.jpeg";
import _27 from "../../assets/pictures/27.jpeg";
import _28 from "../../assets/pictures/28.jpeg";
import _29 from "../../assets/pictures/29.jpeg";
import _30 from "../../assets/pictures/30.jpeg";

export default function Photography() {
  var images = [
    _1,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8,
    _9,
    _10,
    _11,
    _12,
    _13,
    _14,
    _15,
    _16,
    _17,
    _18,
    _19,
    _20,
    _21,
    _22,
    _23,
    _24,
    _25,
    _26,
    _27,
    _28,
    _29,
    _30,
  ];
  return (
    <section className="text-white px-5 py-5" id="photography">
      <div className="flex flex-col gap-3 md:gap-4 mb-5 md:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl xxl:text-8xl font-sen font-bold">
          Photography
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl">
          Here is a collection of my best pictures that I took while travelling places all around
          the world.
        </p>
      </div>
      <div className="overflow-x-auto max-h-[400px] flex flex-row gap-3 md:hidden no-scrollbar">
        {images.map((img, index) => {
          return <img src={img} key={index} />;
        })}
      </div>
      <div className="hidden md:block columns-3 lg:columns-4 xl:columns-5 xxl:columns-8 space-y-4  overflow-y-auto max-h-[750px] xl:max-h-[900px] xxl:max-h-[1000px] 	[@media(max-width:767px)]:scrollbar-hide no-scrollbar">
        {images.map((img, index) => {
          return (
            <img
              src={img}
              key={index}
              className="w-[300px] md:w-[250px] xl:w-[270px] object-cover "
            />
          );
        })}
      </div>
    </section>
  );
}
