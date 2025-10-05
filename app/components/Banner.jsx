"use client";

import CopyElement from "./CopyElement";

const Banner = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="text-center leading-[5rem] mb-[6rem]">
        <CopyElement delay={0.5} animateOnScroll={false}>
          <h1 className="text-white text-[9rem] leading-[8.5rem] font-medium tracking-[-.15rem] w-full">
            SAY IT ONCE,
            <br /> LET ELARA DO THE REST
          </h1>
        </CopyElement>
        <CopyElement delay={0.7} animateOnScroll={false}>
          <h2 className="text-[2rem] text-white/70 ">
            Reinventing diagnostic reporting with secure voice-driven AI
          </h2>
        </CopyElement>
      </div>
    </section>
  );
};

export default Banner;
