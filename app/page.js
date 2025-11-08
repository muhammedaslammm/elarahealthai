"use client";

import Banner from "./components/Banner";
import { ReactLenis } from "lenis/react";
import Pain from "./components/Pain";
import Question from "./components/Question";
import Introduction from "./components/Introduction";
import Vision from "./components/Vision";
import { Work } from "./components/Working";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <ReactLenis root>
      <div className="">
        <Header />
        <Banner />
        <Pain />
        <Question />
        <Introduction />
        <Vision />
        <Work />
        <CallToAction />
        <Footer />
      </div>
    </ReactLenis>
  );
}
