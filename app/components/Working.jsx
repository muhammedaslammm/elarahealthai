export const Work = () => {
  return (
    <section className="section__container flex flex-col gap-4 md:gap-[5rem] my-[5rem] md:my-[13rem]">
      <h1 className="text-white/50 text-[1.2rem] md:text-[3rem] leading-[1.8rem] md:leading-[3.5rem] text-end md:text-center uppercase">
        How <span className="text-blue-400">Elara</span>{" "}
        <span className="text-white">Works?</span>
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] md:gap-[2rem]"
        id="point__container"
      >
        <div className="point__note !text-start space-y-1 md:space-y-6">
          <div className="text-white uppercase">1. Talk</div>
          <div>
            <span className="text-white">You talk </span>through{" "}
            <span className="text-white">your findings and impression</span> as
            you do now.
          </div>
        </div>
        <div className="point__note !text-end md:!text-start space-y-1 md:space-y-6">
          <div className="text-white uppercase">2. AI - Interpretation</div>
          <div>
            Our proprietary medical{" "}
            <span className="text-blue-400">
              AI interprets context, measurements, and key medical terminology,
            </span>{" "}
            building the structured report in real-time.
          </div>
        </div>
        <div className="point__note !text-start space-y-1 md:space-y-6">
          <div className="text-white uppercase">3. Report Generation</div>
          <div>
            <span className="text-white">
              A complete, professional report generated,
            </span>
            requiring only a quick review and final signature.
          </div>
        </div>
      </div>
    </section>
  );
};
