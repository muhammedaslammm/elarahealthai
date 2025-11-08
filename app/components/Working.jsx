import CopyElement from "./CopyElement";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const Work = () => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);
  useGSAP(
    () => {
      const elements = gsap.utils.toArray("#point__container > *");
      lineRefs.current = [];
      elements.forEach((element) => {
        let split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
        });
        lineRefs.current.push(...split.lines);
      });
      gsap.from(lineRefs.current, {
        y: "110%",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 35%",
        },
      });
    },
    { scope: containerRef }
  );
  return (
    <section
      className="section__container flex flex-col gap-4 md:gap-[3rem] my-[5rem] md:my-[13rem]"
      ref={containerRef}
    >
      <CopyElement>
        <h1 className="text-white/50 text-[1.2rem] md:text-[3.5rem] leading-[2.8rem] text-start uppercase">
          How <span className="text-blue-400">Elara</span>{" "}
          <span className="text-white">Works?</span>
        </h1>
      </CopyElement>
      <div
        className="flex flex-col items-start gap-4 md:gap-[2rem]"
        id="point__container"
      >
        <p className="point__note !text-start">
          You talk{" "}
          <span className="text-white">
            through your findings and impression
          </span>{" "}
          as you do now.
        </p>
        <p className="point__note !text-start">
          Our proprietary medical{" "}
          <span className="text-blue-400">
            AI interprets context, measurements, and key medical terminology,
          </span>{" "}
          building the structured report in real-time.
        </p>
        <p className="point__note !text-start">
          <span className="text-white">
            A complete, professional report generated,
          </span>
          requiring only a quick review and final signature.
        </p>
      </div>
    </section>
  );
};
