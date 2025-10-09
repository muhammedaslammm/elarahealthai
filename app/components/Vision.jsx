import CopyElement from "./CopyElement";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Vision = () => {
  const containerRef = useRef(null);
  let splitRefs = useRef([]);
  let lineRefs = useRef([]);

  useGSAP(
    () => {
      splitRefs.current = [];
      lineRefs.current = [];

      let elements = gsap.utils.toArray(".anime");
      elements.forEach((element) => {
        let split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
        });
        splitRefs.current.push(split);
        lineRefs.current.push(...split.lines);
      });

      gsap.set(lineRefs.current, {
        y: "110%",
      });

      gsap.to(lineRefs.current, {
        y: "0%",
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
      className="section__container my-[15rem] flex flex-col gap-[4rem]"
      ref={containerRef}
    >
      <CopyElement>
        <h2 className="text-white/50 text-[2rem] leading-[2.8rem] text-center uppercase">
          We are{" "}
          <span className="text-blue-400">building an AI-powered platform</span>{" "}
          to enable healthcare professionals to{" "}
          <span className="text-white">
            generate structured, accurate medical reports
          </span>{" "}
          effortlessly-{" "}
          <span className="text-blue-400">by simply speaking.</span>
        </h2>
      </CopyElement>
      <div className="">
        <div className="w-[90%] mx-auto space-y-[2rem]">
          <div className="flex justify-between items-start w-full">
            <div className="point__head anime">Voice to Report</div>
            <div className="point__note anime">
              Our system will{" "}
              <span className="text-white">
                instantly translate natural medical dictation
              </span>{" "}
              into a clean, templated, and fully structured report, ready for
              review.
            </div>
          </div>

          <div className="flex justify-between items-start w-full">
            <div className="point__head !text-blue-400 anime">
              Error Reduction
            </div>
            <div className="point__note anime">
              AI algorithms will{" "}
              <span className="text-blue-400">
                cross-reference dictated findings
              </span>{" "}
              with relevant norms and historical data, flagging potential
              discrepancies before sign-off.
            </div>
          </div>

          <div className="flex justify-between items-start w-full">
            <div className="point__head anime">True Efficiency</div>
            <div className="point__note anime">
              Expect to{" "}
              <span className="text-white">save an hour or more per day</span>{" "}
              by eliminating manual typing, formatting, and template selection.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
