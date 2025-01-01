import React from "react";

export default function Cta() {
  return (
    <section
      id="contact"
      className="text-white px-5 py-5 md:grid md:grid-cols-2 md:px-5 md:gap-2 md:py-10 lg:px-20 lg:gap-8 lg:py-14 xl:px-32 xl:py-16 xl:gap-14"
    >
      <div className="font-sen mb-5">
        <p className="text-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3">
          Let's Talk Business
        </p>
        <p className="text-bold text-base md:text-lg lg:text-xl xl:text-2xl text-light_gray">
          Now that you know a lot about me, let me know if you are interested to work with me.
        </p>
      </div>
      <div className="md:text-lg lg:text-xl xl:text-2xl">
        <form className="">
          <div className="mb-5 lg:mb-8 xl:mb-12">
            <label>Name</label>
            <input
              type="text"
              className="bg-black_lighter w-full border-none md:text-lg lg:text-xl xl:text-2xl"
            />
          </div>
          <div className="mb-5 lg:mb-8 xl:mb-12">
            <label>Email</label>
            <input
              type="email"
              className="bg-black_lighter w-full border-none md:text-lg lg:text-xl xl:text-2xl"
            />
          </div>
          <div className="mb-5 lg:mb-8 xl:mb-12">
            <label>Message</label>
            <textarea
              type="text"
              className="bg-black_lighter w-full border-none md:text-lg lg:text-xl xl:text-2xl"
            ></textarea>
          </div>
          <button className="bg-yellow_custom w-full h-14 font-sen font-bold" type="submit">
            LET'S GET STARTED
          </button>
        </form>
      </div>
    </section>
  );
}
