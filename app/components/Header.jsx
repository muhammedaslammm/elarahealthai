import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export const Header = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: "-100%",
      duration: 1,
      delay: 0.5,
    });
  });
  return (
    <header
      className="py-2 md:py-3 border-b border-neutral-800  fixed left-0 right-0 top-0 backdrop-blur-md bg-white/1 z-100"
      ref={containerRef}
    >
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="uppercase text-[.9rem] md:text-[1.2rem] text-white font-semibold">
          Elara Health AI
        </div>
        <div className="text-white text-[.8rem] sm:text-[1rem] bg-blue-600 py-1 sm:py-1.5 px-2 sm:px-4 cursor-pointer hover:bg-blue-500 transition-colors">
          Get Early Access
        </div>
      </div>
    </header>
  );
};
