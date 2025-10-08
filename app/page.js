"use client";

import Banner from "./components/Banner";
import { ReactLenis } from "lenis/react";
import Pain from "./components/Pain";
import Question from "./components/Question";
import Introduction from "./components/Introduction";
import Vision from "./components/Vision";
import { Work } from "./components/Work";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="pb-[500rem]">
        <Banner />
        <Pain />
        <Question />
        <Introduction />
        <Vision />
        <Work />
      </div>
    </ReactLenis>
  );
}
