import CopyElement from "./CopyElement";

const Vision = () => {
  return (
    <section className="section__container my-[17rem] flex flex-col gap-[4rem]">
      <CopyElement>
        <h2 className="text-white/50 text-[2rem] leading-[2.8rem] text-center uppercase">
          We are building an{" "}
          <span className="text-white">AI-powered platform</span> to enable
          healthcare professionals to{" "}
          <span className="text-white">
            generate structured, accurate medical reports
          </span>{" "}
          effortlessly—by simply <span className="text-white">speaking.</span>
        </h2>
      </CopyElement>
      <div className="">
        <div className="w-[90%] mx-auto space-y-[2rem]">
          <div className="flex justify-between items-start w-full">
            <CopyElement flex={true}>
              <div className="point__head">Voice to Report</div>

              <div className="point__note">
                Our system will{" "}
                <span className="text-white">
                  instantly translate natural medical dictation
                </span>{" "}
                into a clean, templated, and fully structured report, ready for
                review.
              </div>
            </CopyElement>
          </div>

          <div className="flex justify-between items-start w-full">
            <CopyElement flex={true}>
              <div className="point__head">Error Reduction</div>
              <div className="point__note">
                AI algorithms will{" "}
                <span className="text-white">
                  cross-reference dictated findings
                </span>{" "}
                with relevant norms and historical data, flagging potential
                discrepancies before sign-off.
              </div>
            </CopyElement>
          </div>

          <div className="flex justify-between items-start w-full">
            <CopyElement flex={true}>
              <div className="point__head">True Efficiency</div>
              <div className="point__note">
                Expect to{" "}
                <span className="text-white">save an hour or more per day</span>{" "}
                by eliminating manual typing, formatting, and template
                selection.
              </div>
            </CopyElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
