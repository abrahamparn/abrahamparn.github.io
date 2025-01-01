import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../parts/Home/Hero";
import WorkExprience from "../parts/Home/WorkExperience";
import PhilosophyValue from "../parts/Home/PhilosophyValue";
import Banner from "../components/Banner";
import Skillset from "../parts/Home/Skillset";
import Logos from "../parts/Home/Logos";
import Project from "../parts/Home/Project";
import doomsday from "../assets/doomsday.jpg";
import forInstagram from "../assets/forInstagram.png";
import Testimony from "../parts/Home/Testimony";
import Photography from "../parts/Home/Photography";
import Cta from "../parts/Home/Cta";
export default function Home() {
  return (
    <section className=" bg-black">
      <Hero />
      <WorkExprience />
      {/* <Banner
          title="Philosophy & Values"
          body="   I think everyone wants the same thing - relationship with humanity,
              peace with the metaphysical, and experience with the universe. I try
              to grasp these things with my values: authenticity, creativity, &
              hospitality."
          picture={doomsday}
          linkTitle="More About Me"
        /> */}
      <Skillset />
      <Logos />
      <Project />
      <Banner
        title="Instagram"
        body="
          If you want to get to know more about me and you enjoy photography, 
          then I highly recommend that you check out my Instagram. 
          I like to take simple pictures that I think it is beautiful and I want to share it with you."
        picture={forInstagram}
        linkTitle="Follow me on IG"
      />
      {/* <Testimony /> */}
      <Photography />
      <Cta />
    </section>
  );
}
