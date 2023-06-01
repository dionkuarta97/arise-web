"use client";
import {
   motion,
   AnimatePresence,
   useReducedMotion,
   Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

const variants: Variants = {
   in: {
      scale: 0.8,
      y: 100,
      x: "100%",
      transition: {
         duration: 0.4,
      },
   },
   center: {
      x: 0,
      scale: 0.8,
      transformOrigin: "top",
      transition: {
         duration: 0.4,
      },
   },
   scaleUp: {
      scale: 1,
      y: 0,
      transition: {
         duration: 0.4,
         delay: 0.4,
      },
   },
   scaleDown: {
      scale: 0.8,
      y: 100,
      transition: {
         duration: 0.4,
      },
   },
   out: {
      opacity: 0,
      x: "-100%",
      transition: {
         duration: 0.4,
         delay: 0.4,
      },
   },
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const TransitionEffect = ({ children }: { children: React.ReactNode }) => {
   const pathname = usePathname();
   const shouldReduceMotion = useReducedMotion();

   return (
      <AnimatePresence
         initial={false}
         mode="wait"
      >
         <motion.div
            key={pathname}
            variants={!shouldReduceMotion ? variants : undefined}
            initial="in"
            animate={["center", "scaleUp"]}
            exit={["scaleDown", "out"]}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
};

export default TransitionEffect;
