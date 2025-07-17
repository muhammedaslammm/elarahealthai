"use client";
import { Graph } from "phosphor-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <nav className="w-[80%] mx-auto text-white flex justify-between items-center py-5 font--manrope">
        <div className="left  flex items-center gap-1">
          <Graph weight="bold" className="text-[1.2rem]" />
          <span className="font-semibold text-[1.1rem]">Elarahealth</span>
        </div>
        <div className="middle text-[1.1rem] font-semibold flex gap-6 text-neutral-400">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#highlight" className="hover:text-white transition">
            Highlight
          </a>
        </div>
        <div>
          <a
            href="#product"
            className="text-[1rem] py-2 px-2 text-neutral-300 hover:text-white transition font-medium bg-white/10 backdrop-blur-md rounded-[.2rem]"
          >
            Be our early member
          </a>
        </div>
      </nav>
    </header>
  );
}
