import CopyElement from "./CopyElement";

const Introduction = () => {
  return (
    <section className="section__container  text-white/70">
      <CopyElement flex={true}>
        <div className="mr-auto text-[2.5rem] uppercase">Introducing</div>
        <h2 className="text-white text-[8rem] uppercase">elara health ai</h2>
        <div className="ml-auto text-[2.5rem] uppercase">
          the future of radiology
        </div>
      </CopyElement>
    </section>
  );
};

export default Introduction;
