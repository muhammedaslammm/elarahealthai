"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CopyElement from "./CopyElement";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      let section = containerRef.current;
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: "+=2000",
          pin: true,
          scrub: false,
          anticipatePin: 1,
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <section className="section__container my-[17rem]" ref={containerRef}>
      <CopyElement>
        <h2 className="text-white/50 text-[2rem] text-center uppercase">
          We are building an{" "}
          <span className="text-white">AI-powered platform</span> to enable
          healthcare professionals to{" "}
          <span className="text-white">
            generate structured, accurate medical reports
          </span>{" "}
          effortlessly—by simply <span className="text-white">speaking.</span>
        </h2>
      </CopyElement>
    </section>
  );
};

export default Vision;
