"use client";

import Banner from "./components/Banner";
import { ReactLenis } from "lenis/react";
import Pain from "./components/Pain";
import Question from "./components/Question";
import Introduction from "./components/Introduction";
import Vision from "./components/Vision";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="pb-[500rem]">
        <Banner />
        <Pain />
        <Question />
        <Introduction />
        <Vision />
      </div>
    </ReactLenis>
  );
}
