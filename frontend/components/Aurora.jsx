import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

export default function Aurora() {
  const scale = useMotionValue(0.8);
  const opacity = useMotionValue(0);

  useAnimationFrame((t) => {
    if (scale.get() < 1) scale.set(Math.min(1, scale.get() + 0.1));
    if (opacity.get() < 1) opacity.set(Math.min(1, opacity.get() + 0.1));
  }); //runs the call back on every screen refreshes. on every hertz

  return (
    <motion.div
      className="animation--gradient"
      style={{
        position: "absolute",
        bottom: "0",
        width: "100vw",
        height: "40vh",
        opacity,
        scale,
        pointerEvents: "none",
        zIndex: 0,
        background: `
          radial-gradient(50% 60% at 50% 100%,
            #56e1e9 0%,
            #112c71 30%,
            #0a2353 80%,
            transparent 100%)
        `,
        filter: "blur(30px)",
      }}
    ></motion.div>
  );
}
