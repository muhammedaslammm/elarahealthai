"use client";

import CopyElement from "./CopyElement";

const Pain = () => {
  return (
    <section className="section__container flex my-[8rem]">
      <div className="w-2/6">
        <CopyElement>
          <div className="text-white/70 text-[1.8rem] leading-[2.5rem]">
            <span className="text-white">Manual Reporting,</span> Why is it a
            Real <span className="text-white">Pain?</span>
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
            <span className="text-blue-400">
              1.1% of reports require corrections after sign-off,
            </span>{" "}
            and nearly <span className="text-blue-400">70% </span>of those{" "}
            <span className="text-blue-400"> errors</span> come from{" "}
            <span className="text-white">
              typos, missed findings, or incomplete interpretations.
            </span>{" "}
            Every extra keystroke adds time, and every error adds risk.
          </p>
          <p>
            <span className="text-blue-400">Radiologists </span>{" "}
            <span className="text-white">aren’t just reading scans</span>{" "}
            —they’re also{" "}
            <span className="text-white">
              juggling tight deadlines, tedious report-writing, constant
              proofreading.
            </span>{" "}
            If errors are inevitable in this environment,
            <span className="text-blue-400">
              is there a better way forward?
            </span>
          </p>
        </CopyElement>
      </div>
    </section>
  );
};

export default Pain;
