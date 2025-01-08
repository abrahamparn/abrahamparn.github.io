import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  useGSAP(
    () => {
      const title = contactRef.current.querySelector(".contact-title");
      const subtext = contactRef.current.querySelector(".contact-subtext");
      const cards = contactRef.current.querySelectorAll(".contact-card");
      const socialButtons = contactRef.current.querySelectorAll(".contact-social");

      gsap.from(title, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "10% 80%",
          end: "20% 10%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(subtext, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "20% 70%",
          end: "20% 10%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      });

      gsap.from(cards, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "20% 70%",
          end: "20% 10%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.4,
      });

      gsap.from(socialButtons, {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "20% 70%",
          end: "20% 10%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.4,
      });

      let waveTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      });

      waveTimeline.to(".jumpyAnimation", {
        y: -100,
        duration: 0.6,
        stagger: 0.1,
        ease: "power1.out",
      });

      waveTimeline.to(
        ".jumpyAnimation",
        {
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power1.in",
        },
        "-=1"
      );
    },
    { scope: contactRef }
  );

  const { contextSafe } = useGSAP({ scope: contactRef });
  const highlightAnimate = contextSafe((e) => {
    const item = e.currentTarget;
    const highlightAnimate = item.querySelector(".highlightAnimate");
    gsap.to(highlightAnimate, { background: "rgb(15 118 110)" });
  });

  const dehighlightAnimate = contextSafe((e) => {
    const item = e.currentTarget;
    const dehighlightAnimate = item.querySelector(".highlightAnimate");
    gsap.to(dehighlightAnimate, { background: "black" });
  });

  return (
    <section id="contact" className="h-[100dvh] bg-black text-white_tertiary" ref={contactRef}>
      <div className="h-full px-10 xl:px-20 pt-7 md:pt-0">
        <div className="flex flex-col justify-evenly h-full">
          <div className="h-full flex flex-col justify-evenly">
            <div className="flex flex-col justify-evenly">
              <div className="md:flex md:flex-col md:gap-4">
                <h2 className="contact-title text-4xl md:text-5 lg:text-6xl xl:text-7xl xxl:text-9xl font-bold tracking-tight md:tracking-widest text-center">
                  <span className="inline-block jumpyAnimation">C</span>
                  <span className="inline-block jumpyAnimation">O</span>
                  <span className="inline-block jumpyAnimation">N</span>
                  <span className="inline-block jumpyAnimation">T</span>
                  <span className="inline-block jumpyAnimation">A</span>
                  <span className="inline-block jumpyAnimation">C</span>
                  <span className="inline-block jumpyAnimation">T</span>
                  <span className="inline-block jumpyAnimation">&nbsp;</span>
                  <span className="inline-block jumpyAnimation">M</span>
                  <span className="inline-block jumpyAnimation">E</span>
                </h2>
                <p className="contact-subtext w-full left-0 text-lg md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl tracking-tighter md:tracking-widest leading-tight md:leading-relaxed font-semibold text-center">
                  Let's create something amazing. Want to work together or just say hi?
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly gap-4">
              <div className="flex flex-col justify-evenly space-y-4 md:space-y-8 lg:space-y-12 xxl:space-y-24">
                {/* Email */}
                <div
                  className="contact-card p-4 md:p-6 xl:p-12 bg-[#1a1a1a] rounded-md shadow-md hover:shadow-lg "
                  onMouseEnter={highlightAnimate}
                  onMouseLeave={dehighlightAnimate}
                >
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl font-semibold lg:font-bold mb-1 lg:mb-4 xxl:mb-8 text-center">
                    Email
                  </h3>
                  <a
                    href="mailto:abrahamnaiborhu@gmail.com"
                    className="highlightAnimate text-center break-all text-base md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl lg:tracking-widest tracking-wide block"
                  >
                    abrahamnaiborhu@gmail.com
                  </a>
                </div>

                {/* WhatsApp */}
                <div
                  className="contact-card p-4 md:p-6 xl:p-12 bg-[#1a1a1a] rounded-md shadow-md hover:shadow-lg "
                  onMouseEnter={highlightAnimate}
                  onMouseLeave={dehighlightAnimate}
                >
                  <h3 className=" text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl font-semibold lg:font-bold mb-1 lg:mb-4 xxl:mb-8 text-center">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/+6281388302150"
                    className="highlightAnimate text-center break-all text-base md:text-xl lg:text-2xl xl:text-3xl xxl:text-5xl lg:tracking-widest tracking-wide block"
                  >
                    +62 813 8830 2150
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 xl:gap-12 xxl:gap-20 md:justify-center">
                <div>
                  <button className="contact-social border py-2 md:py-3 lg:py-4 xxl:py-8 md:px-14 lg:px-20 xxl:px-36 h-full w-full">
                    <a
                      href="https://www.instagram.com/abraham_pn"
                      className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  xxl:text-6xl font-bold"
                    >
                      INSTAGRAM
                    </a>
                  </button>
                </div>
                <div>
                  <button className="contact-social border py-2 md:py-3 lg:py-4 xxl:py-8 md:px-14 lg:px-20 xxl:px-36 h-full w-full">
                    <a
                      href="https://linkedin.com/in/abrahamnaiborhu/"
                      className="text-xl md:text-2xl lg:text-3xl xl:text-4xl xxl:text-6xl font-bold"
                    >
                      LINKEDIN
                    </a>
                  </button>
                </div>
                <div>
                  <button className="contact-social border py-2 md:py-3 lg:py-4 xxl:py-8 md:px-14 lg:px-20 xxl:px-36 h-full w-full">
                    <a
                      href="https://github.com/abrahamparn/"
                      className="text-xl md:text-2xl lg:text-3xl xl:text-4xl  xxl:text-6xl font-bold "
                    >
                      GITHUB
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="font-bold xxl:text-xl tracking-widest">© 2025 ABRAHAM</h2>
            <h2 className="font-semibold xxl:text-xl opacity-50 tracking-widest">
              All Rights Reserved.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
