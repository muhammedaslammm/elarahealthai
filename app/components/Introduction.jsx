import CopyElement from "./CopyElement";

const Introduction = () => {
  return (
    <section className="section__container text-white/70">
      <CopyElement duration={2.5}>
        <h2 className="uppercase text-[6.5rem] text-center leading-[6.5rem]">
          Introducing <span className="text-blue-400 ">Elara health AI</span>:
          <span className="text-white">Structured Reporting,</span>
          Redefined.
        </h2>
      </CopyElement>
    </section>
  );
};

export default Introduction;
