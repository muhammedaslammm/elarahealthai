"use client";

import CopyElement from "./CopyElement";

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen pt-12">
      <div className="text-center leading-[5rem]">
        <CopyElement delay={0.5} animateOnScroll={false}>
          <h1 className="text-white text-[9rem] leading-[8.2rem] font-medium tracking-[-.15rem] w-full">
            SAY IT <span className="text-blue-400">ONCE,</span>
            <br /> LET <span className="text-blue-400">ELARA</span> DO THE{" "}
            <span className="text-blue-400">REST</span>
          </h1>
        </CopyElement>
        <CopyElement delay={0.7} animateOnScroll={false}>
          <h2 className="text-[1.8rem] text-white/50 capitalize tracking-[.05rem]">
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
