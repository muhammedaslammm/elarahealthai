export const CallToAction = () => {
  return (
    <section className="py-[6rem] border-t border-neutral-800">
      <div className="w-[95%] mx-auto text-white/50 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <h3 className="text-white text-[2rem] font-semibold">
            Join Our Early Access Programme
          </h3>
          <p className="text-[1.6rem] leading-[2rem] text-center max-w-[70rem]">
            The product isn't launched yet, but{" "}
            <span className="text-white">
              we are looking for radiologists who want to be the first to test
              and shape the future of medical reporting.
            </span>{" "}
            <span className="text-blue-400">
              Sign up for our Early Access Program
            </span>{" "}
            to receive updates, exclusive feature previews, and be notified the
            moment we launch our pilot.
          </p>
        </div>
        <form action="">
          <div className="flex items-center gap-4">
            <input
              type="text"
              className="border text-[1.1rem] border-neutral-500 py-2 px-3 w-[35rem]"
              placeholder="Enter Your Email"
            />
            <button
              type="button"
              className="bg-blue-600 text-white text-[1.1rem] py-2 px-8 font-semibold cursor-pointer hover:bg-blue-500 transition-colors"
            >
              Get Early Access
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
