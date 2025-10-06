import CopyElement from "./CopyElement";

const Question = () => {
  return (
    <section className="section__container my-[13rem] ">
      <CopyElement>
        <div className="text-white/70 text-[3.5rem] leading-[4rem] text-center uppercase">
          What if, the <span className="text-blue-300">report generation</span>{" "}
          could be{" "}
          <span className="text-blue-300">smarter, more automatic, </span>{" "}
          freeing radiologists to{" "}
          <span className="text-blue-300">focus on insight</span> rather than
          paperwork? ”
        </div>
      </CopyElement>
    </section>
  );
};

export default Question;
