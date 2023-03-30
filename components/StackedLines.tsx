"use client";
import { motion, stagger } from "framer-motion";

const boxVariants = {
  initial: { scaleY: 0.9, translateY: 0.2 },
  animate: {
    scaleY: 1,
    translateY: 0,
    transition: {},
  },
};

export default function StackedLines() {

  return (
    <>
      <motion.div
        className="h-4 w-full bg-[#231F20]"
        initial={{ scaleY: 0.9, translateY: 2 }}
        animate={{
          scaleY: 1,
          translateY: 0,
        }}
        transition={{
          staggerChildren: 1,
          ease: "easeInOut",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="h-3 w-full bg-[#231F20]"
        initial={{ scaleY: 0.9, translateY: 2 }}
        animate={{
          scaleY: 1,
          translateY: 0,
        }}
        transition={{
          staggerChildren: 1,
          ease: "easeInOut",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.4,
        }}
      />
      <motion.div
        className="h-2 w-full bg-[#231F20]"
        initial={{ scaleY: 0.9, translateY: 2 }}
        animate={{
          scaleY: 1,
          translateY: 0,
        }}
        transition={{
          staggerChildren: 1,
          ease: "easeInOut",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.7,
        }}
      />
      <motion.div
        className="h-1 w-full bg-[#231F20]"
        initial={{ scaleY: 0.9, translateY: 2 }}
        animate={{
          scaleY: 1,
          translateY: 0,
        }}
        transition={{
          staggerChildren: 1,
          ease: "easeInOut",
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </>
  );
}
