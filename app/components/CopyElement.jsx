"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const CopyElement = ({
  children,
  delay = 0,
  animateOnScroll = true,
  duration = 2,
  flex = false,
}) => {
  let containerRef = useRef(null);
  let splitRefs = useRef([]);
  let lineRefs = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      splitRefs.current = [];
      lineRefs.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-multiple-children")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        let split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line",
        });
        splitRefs.current.push(split);
        lineRefs.current.push(...split.lines);
      });

      gsap.set(lineRefs.current, {
        y: "100%",
      });

      let animationProps = {
        y: "0%",
        duration: duration,
        stagger: 0.1,
        delay: delay,
        ease: "power3.out",
      };

      if (animateOnScroll) {
        gsap.to(lineRefs.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            once: true,
          },
        });
      } else {
        gsap.to(lineRefs.current, animationProps);
      }

      return () => {
        splitRefs.current.forEach((split) => {
          if (split) split.revert();
        });
      };
    },
    { scope: containerRef }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }
  return (
    <div
      data-multiple-children
      ref={containerRef}
      className={`flex w-full  ${
        flex ? "flex-row justify-between" : "flex-col"
      } gap-[2rem]`}
    >
      {children}
    </div>
  );
};

export default CopyElement;
