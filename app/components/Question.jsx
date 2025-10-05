import CopyElement from "./CopyElement";

const Question = () => {
  return (
    <section className="section__container my-[17rem] ">
      <CopyElement>
        <div className="text-white/70 text-[3.5rem] leading-[4rem] text-center uppercase">
          What if, the <span className="text-white">report generation</span>{" "}
          could be <span className="text-white">smarter, more automatic, </span>{" "}
          freeing radiologists to focus on insight rather than paperwork? ”
        </div>
      </CopyElement>
    </section>
  );
};

export default Question;
