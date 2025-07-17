export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center -translate-y-[10%]">
      <h1 className="heading--hero font--poppins">
        <span className="block">Redefine Medical Diagnostics</span>
        <span className="block">with Elara-AI</span>
      </h1>
      <p className="paragraph--hero font--poppins">
        Generate structured{" "}
        <span className="text-white">medical reports--just by speaking</span>
      </p>
    </section>
  );
}
