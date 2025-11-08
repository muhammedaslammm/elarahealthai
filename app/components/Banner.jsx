"use client";

import { Spotlight } from "@/components/ui/spotlight";
import CopyElement from "./CopyElement";

const Banner = () => {
  return (
    <section className="relative h-screen overflow-hidden md:pt-12">
      <Spotlight
        fill="#737373"
        className="absolute left-[10rem] md:top-[7rem] md:left-[25rem] z-0 "
      />
      <Spotlight
        fill="#919191"
        className="absolute -left-[5rem] h-[50rem] md:top-[0rem] md:left-[47rem] z-0"
      />
      <div className="absolute w-[80%] md:w-full top-[50%] md:top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-center flex flex-col gap-8 md:gap-6 z-10">
        <CopyElement delay={0.5} animateOnScroll={false}>
          <h1 className="text-white text-[4rem] md:text-[9rem] leading-[3.8rem] md:leading-[8.2rem] font-medium tracking-[-.15rem] w-full">
            SAY IT <span className="text-blue-400">ONCE,</span>
            <br /> LET <span className="text-blue-400">ELARA</span> DO THE{" "}
            <span className="text-blue-400">REST</span>
          </h1>
        </CopyElement>
        <CopyElement delay={0.7} animateOnScroll={false}>
          <h2 className="text-[.9rem] md:text-[1.6rem] text-white/50 tracking-[.1rem] leading-[1.3rem] md:leading-normal uppercase w-full">
            Reinventing{" "}
            <span className="text-white uppercase">diagnostic reporting</span>{" "}
            with secure{" "}
            <span className="text-white uppercase ">voice-driven AI</span>
          </h2>
        </CopyElement>
      </div>
    </section>
  );
};

export default Banner;
