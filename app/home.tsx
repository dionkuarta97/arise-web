"use client";

import { Variants, motion } from "framer-motion";
import bg from "./assets/background-image.jpg";

const parentVariant: Variants = {
   initial: { opacity: 0 },
   /**
    * Here we are defining @param staggerChildren with 1sec.
    * You can change this time as per your need.
    * 1st child will not get delayed. delay starts from 2nd child onwards.
    * 2nd child animation will start after: 1sec
    * 2rd child animation will start after: 2sec
    * 4th child animation will start after: 3sec
    * and so on...
    */
   animate: { opacity: 1, transition: { staggerChildren: 0.5, duration: 1 } },
};

const childrenVariant: Variants = {
   initial: { opacity: 0, scale: 0.95 },
   animate: { opacity: 1, scale: 1 },
};
export default function Home() {
   return (
      <div
         style={{
            backgroundImage: `url('${bg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
         className="flex min-h-screen flex-col items-center justify-center p-24"
      >
         <motion.div
            variants={parentVariant}
            animate="animate"
            initial="initial"
            className="md:w-2/3 w-96 text-center"
         >
            <motion.div
               variants={childrenVariant}
               className="text-white font-bold drop-shadow-lg md:text-6xl text-2xl"
            >
               Simplifying Web3 For Individuals And Businesses
            </motion.div>
            <div className="text-white md:m-16 m-8 md:text-xl text-lg">
               A user friendly Wallet as a Service and business service suite
               that bridges the blockchain world with everyday economic
               activites
            </div>
            <motion.div
               variants={childrenVariant}
               className="text-white md:m-16 m-8 md:text-xl text-lg"
            >
               <button className="border md:py-3 py-1 md:px-16 px-5 bg-white bg-opacity-10 active:bg-opacity-0 active:scale-95 rounded-lg">
                  Join Waitlist
               </button>
            </motion.div>
         </motion.div>
      </div>
   );
}
