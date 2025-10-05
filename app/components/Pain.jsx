"use client";

import CopyElement from "./CopyElement";

const Pain = () => {
  return (
    <section className="section__container flex ">
      <div className="w-2/6">
        <CopyElement>
          <div className="text-white text-[2.5rem] leading-[3rem]">
            <span className="font-semibold">Manual Reporting,</span> Why is it a
            Real Pain?
          </div>
        </CopyElement>
      </div>
      <div className="text-white/70 w-4/6 text-[1.6rem] flex flex-col">
        <CopyElement delay={0.2}>
          <p>
            <strong className="text-white">
              A simple report may take 2 minutes,
            </strong>{" "}
            but complex cases stretch far longer. Studies show that around{" "}
            <strong className="text-white">
              1.1% of reports require corrections after sign-off,
            </strong>{" "}
            and nearly <strong className="text-white">70% </strong>of those{" "}
            <strong className="text-white"> errors</strong> come from{" "}
            <strong className="text-white">
              typos, missed findings, or incomplete interpretations.
            </strong>{" "}
            Every extra keystroke adds time, and every error adds risk.
          </p>
          <p>
            Radiologists aren’t just reading scans—they’re also juggling tight
            deadlines, tedious report-writing, constant proofreading. If errors
            are inevitable in this environment,{" "}
            <strong className="text-white">
              is there a better way forward?
            </strong>
          </p>
        </CopyElement>
      </div>
    </section>
  );
};

export default Pain;
