import React from "react";
import kotlin from "../../assets/skillset/kotlin.svg";
import net from "../../assets/skillset/net.svg";
import netSuite from "../../assets/skillset/netsuite.svg";
import node from "../../assets/skillset/node.svg";
export default function Skillset() {
  return (
    <div className="w-full flex justify-center">
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5 xl:gap-x-10 text-sen gap-y-10 text-white py-12 max-w-[90vw]">
        <div className=" md:row-span-3 flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Skillset</h2>
          <p className="text-lg text-light_gray">
            I am a dedicated Information Technology enthusiast excelling in Web Development and
            Software Development
          </p>
        </div>

        <div className="Netsuite">
          <img src={netSuite} className="h-8 mb-3" />
          <h2 className="text-3xl mb-1">Netsuite Development</h2>
          <p className="text-lg text-light_gray">
            Working with Netsuite projects has taught me how to translated business requirements
            into technical solutions by developing and customizing NetSuite modules with SuiteScript
          </p>
        </div>

        <div className="MERN">
          <img src={node} className="h-8 mb-3" />
          <h2 className="text-3xl mb-1">Javascript Fullstack</h2>
          <p className="text-lg text-light_gray">
            Working with WMDeveloper provides me with a lot of insights on how to create project
            using MERN!
          </p>
        </div>

        <div className=".NET">
          <img src={net} className="h-8 mb-3" />
          <h2 className="text-3xl mb-1">.NET Developer</h2>
          <p className="text-lg text-light_gray">
            Working with Mattel has taught me on how to create and maintain asp.net mvc project and
            vb.net projects
          </p>
        </div>
      </section>
    </div>
  );
}
