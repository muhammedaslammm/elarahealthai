import CopyElement from "./CopyElement";

const Question = () => {
  return (
    <section className="section__container my-[5rem] md:my-[13rem]">
      <CopyElement>
        <div className="text-white/70 text-[1.2rem] md:text-[3rem] leading-[1.8rem] md:leading-[3.5rem] text-end md:text-center uppercase z-10">
          What if, the <span className="text-blue-400">report generation</span>{" "}
          could be <span className="text-white">smarter, more automatic, </span>{" "}
          freeing radiologists to{" "}
          <span className="text-blue-400">focus on insight</span> rather than
          paperwork?
        </div>
      </CopyElement>
    </section>
  );
};

export default Question;
