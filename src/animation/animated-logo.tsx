import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(31, 141, 147, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "#1f8d93",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 560 450"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* M */}
        <motion.path
          d="
            M40 390
            V60
            H105
            L185 180
            L265 60
            H330
            V390
            H270
            V160
            L185 285
            L100 160
            V390
            Z
          "
          stroke="#1f8d93"
          strokeWidth="8"
          strokeLinejoin="round"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            pathLength: {
              duration: 2.2,
              ease: "easeInOut",
            },
            fill: {
              duration: 1.2,
              delay: 1.5,
              ease: "easeInOut",
            },
          }}
        />

        {/* H */}
        <motion.path
          d="
            M365 60
            H425
            V185
            H500
            V60
            H560
            V390
            H500
            V245
            H425
            V390
            H365
            Z
          "
          stroke="#1f8d93"
          strokeWidth="8"
          strokeLinejoin="round"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            pathLength: {
              duration: 2.2,
              delay: 0.15,
              ease: "easeInOut",
            },
            fill: {
              duration: 1.2,
              delay: 1.65,
              ease: "easeInOut",
            },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}