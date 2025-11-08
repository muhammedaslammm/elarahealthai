import CopyElement from "./CopyElement";

const Introduction = () => {
  return (
    <section className="relative section__container text-white/70">
      <CopyElement duration={2.5}>
        <h2 className="uppercase text-[3rem] md:text-[7rem] text-center leading-[3rem] md:leading-[6.8rem] w-full">
          Introducing <span className="text-blue-400 ">Elara health AI</span>
          <span className="text-white">Structured Reporting, </span>Redefined.
        </h2>
      </CopyElement>
    </section>
  );
};

export default Introduction;
