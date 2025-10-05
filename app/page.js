"use client";

import Banner from "./components/Banner";
import { ReactLenis } from "lenis/react";
import Pain from "./components/Pain";
import Question from "./components/Question";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="pb-[500rem]">
        <Banner />
        <Pain />
        <Question />
      </div>
    </ReactLenis>
  );
}
