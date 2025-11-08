import CopyElement from "./CopyElement";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Spotlight } from "@/components/ui/spotlight";

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
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      className="section__container my-[5rem] md:my-[15rem] flex flex-col gap-[3rem] md:gap-[8rem]"
      ref={containerRef}
    >
      <CopyElement>
        <h2 className="text-white/50 text-[1.2rem] md:text-[3rem] leading-[1.8rem] md:leading-[3.5rem] text-start md:text-center uppercase">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem]">
          <div className="flex justify-between flex-col md:flex-col gap-1 md:gap-6 w-full border-0 border-neutral-700">
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

          <div className="flex justify-between flex-col md:flex-col gap-1 md:gap-6 w-full border-0 border-neutral-700">
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

          <div className="flex justify-between flex-col md:flex-col gap-1 md:gap-6 w-full border-0 border-neutral-700">
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
