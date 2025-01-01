import React from "react";

export default function Footer() {
  return (
    <section className="bg-black_lighter text-white p-5 md:p-10 l flex flex-col gap-8">
      <div className="text-white p-5 flex flex-col gap-8 md:grid md:grid-cols-2">
        <div>
          <p className="font-sen font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Abraham P. N.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 text-sm md:text-base lg:text-lg xl:text-xl">
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7">
              <p>Home</p>
              <p>About</p>
              <p>Work</p>
              <p>Process</p>
            </div>
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7">
              <p>Store</p>
              <p>Blog</p>
              <p>Reading List</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-dark_gray text-sm md:text-base lg:text-lg xl:text-xl">
        <p>Copright 2023 - Abraham Naiborhu - A Perosnal Website</p>
      </div>
    </section>
  );
}
