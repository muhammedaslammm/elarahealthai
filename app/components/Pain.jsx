"use client";

import CopyElement from "./CopyElement";

const Pain = () => {
  return (
    <section className="section__container flex my-[8rem]">
      <div className="w-2/6">
        <CopyElement>
          <div className="text-white text-[1.8rem] leading-[2.5rem]">
            <span className="text-white">Manual Reporting,</span> Why is it a
            Real Pain?
          </div>
        </CopyElement>
      </div>
      <div className="text-white/70 w-4/6 text-[1.6rem] flex flex-col">
        <CopyElement delay={0.2}>
          <p>
            <span className="text-white">
              A simple report may take 2 minutes,
            </span>{" "}
            but complex cases stretch far longer. Studies show that around{" "}
            <span className="text-white">
              1.1% of reports require corrections after sign-off,
            </span>{" "}
            and nearly <span className="text-white">70% </span>of those{" "}
            <span className="text-white"> errors</span> come from{" "}
            <span className="text-white">
              typos, missed findings, or incomplete interpretations.
            </span>{" "}
            Every extra keystroke adds time, and every error adds risk.
          </p>
          <p>
            Radiologists aren’t just reading scans—they’re also juggling tight
            deadlines, tedious report-writing, constant proofreading. If errors
            are inevitable in this environment,{" "}
            <span className="text-white">is there a better way forward?</span>
          </p>
        </CopyElement>
      </div>
    </section>
  );
};

export default Pain;
