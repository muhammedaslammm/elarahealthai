export const Footer = () => {
  return (
    <footer className="border-t border-neutral-800">
      <div className="section__container flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-start py-[3rem]">
        <div className="space-y-1 md:space-y-3">
          <div className="text-white text-[1rem] md:text-[2rem]">
            ELARA HEALTH AI
          </div>
          <div className="text-[1rem] md:text-[1.2rem] sm:w-[30rem] text-white/50 leading-[1.2rem] md:leading-[1.5rem]">
            Transforming medical reporting with intelligent automation for
            radiologists.
          </div>
        </div>
        <div className="text-white/50 space-y-1 md:space-y-3 text-[1rem] md:text-[1.1rem]">
          <div className="text-white">Company</div>
          <ul className="md:space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="py-1 md:py-2 border-t border-neutral-800">
        <div className="w-[90%] mx-auto text-white/50 text-[.7rem] md:text-[1rem]">
          &copy; {new Date().getFullYear()} Elara Health AI. All Right Reserved
        </div>
      </div>
    </footer>
  );
};
