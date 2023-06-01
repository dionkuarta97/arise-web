"use client";
import Image from "next/image";
import bg from "../assets/background-image-2.png";
import { motion } from "framer-motion";

export default function About() {
   return (
      <div
         style={{
            backgroundImage: `url('${bg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
         className="flex min-h-screen flex-col items-center md:justify-center p-24"
      >
         <div className="flex md:flex-row flex-col w-96 md:mt-0 mt-8 items-center md:justify-start md:w-11/12">
            <motion.div
               initial={{ x: -800 }}
               animate={{ x: 0 }}
               transition={{ duration: 0.5 }}
               className="md:w-2/5 w-11/12  flex justify-center"
            >
               <Image
                  src="/about.png"
                  alt="about"
                  width="0"
                  height="0"
                  sizes="200vh"
                  style={{
                     WebkitFilter: "drop-shadow(50px 50px 50px #000)",
                     filter: "drop-shadow(50px 50px 50px #000)",
                  }}
                  className="md:w-full w-11/12 h-auto"
               />
            </motion.div>
            <div className="md:ml-auto md:w-3/6 w-11/12 md:mt-0 mt-12">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", stiffness: 100 }}
                  className={"md:text-4xl text-xl font-bold text-white"}
               >
                  About
               </motion.div>
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                     duration: 1,
                     delay: 0.5,
                     type: "spring",
                     stiffness: 100,
                  }}
                  className={"md:text-xl md:mt-8 mt-5 text-base text-white"}
               >
                  ARISE is a non-custodial wallet and blockchain-based payment
                  infrastructure that is designed to simplify web 3.0 technology
                  and make it accessible to a wider audience. We allows users to
                  retain complete control over their digital assets, without
                  having to rely on a third-party custodian to store their
                  funds.
               </motion.div>
            </div>
         </div>
      </div>
   );
}
