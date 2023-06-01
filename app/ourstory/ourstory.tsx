"use client";
import bg from "../assets/background-image-2.png";
import { motion } from "framer-motion";

export default function OurStory() {
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
         <div className="flex md:flex-row flex-col w-96 md:mt-0 mt-8 items-center md:justify-start md:w-screen md:px-20">
            <motion.div
               initial={{ x: -800 }}
               animate={{ x: 0 }}
               transition={{ duration: 0.5 }}
               className="md:w-2/6 w-11/12 flex md:justify-center"
            >
               <div className={"md:text-4xl text-3xl font-bold text-white"}>
                  Our Story
               </div>
            </motion.div>
            <div className="md:ml-auto md:w-4/6 w-11/12 md:mt-0 mt-12">
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                     duration: 1,
                     type: "spring",
                     stiffness: 100,
                  }}
                  className={"md:text-xl md:mt-8 mt-5 text-base text-white"}
               >
                  Our previous experience in developing a Web3 offering for a
                  publicly listed entity led us to ideate and build ARISE!
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
                  By making Web3 exploration easy for users, adoption by
                  businesses will become even more prevalent.
               </motion.div>
               <div className="flex md:mt-12 flex-col space-x-0 md:space-y-0 space-y-4 mt-8 md:flex-row md:space-x-8">
                  <motion.div
                     initial={{ x: 30, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        duration: 1,
                        delay: 1,
                        type: "spring",
                        stiffness: 100,
                     }}
                     style={{
                        backgroundImage: `url('/ourstory-card.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                     }}
                     className="md:p-8 p-3 rounded-lg md:w-1/3 flex-col"
                  >
                     <div className="text-base text-white md:mb-2">PAIN 01</div>
                     <div className="md:text-lg text-base text-white font-bold">
                        Missed Oportunity
                     </div>
                     <div className="text-base text-white">
                        The business we consulted for opted for a blockchain
                        initiative because of FOMO.
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ x: 30, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        duration: 1,
                        delay: 1.5,
                        type: "spring",
                        stiffness: 100,
                     }}
                     style={{
                        backgroundImage: `url('/ourstory-card.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                     }}
                     className="md:p-8 p-3 rounded-lg md:w-1/3 flex-col"
                  >
                     <div className="text-base text-white md:mb-2">PAIN 02</div>
                     <div className="md:text-lg text-base text-white font-bold">
                        Lack Of Knowledge
                     </div>
                     <div className="text-base text-white">
                        Targeted users heard of Web3 but weren't familiar with
                        how to interact with it.
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ x: 30, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        duration: 1,
                        delay: 2,
                        type: "spring",
                        stiffness: 100,
                     }}
                     style={{
                        backgroundImage: `url('/ourstory-card.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                     }}
                     className="md:p-8 p-3 rounded-lg md:w-1/3 flex-col"
                  >
                     <div className="text-base text-white md:mb-2">PAIN 03</div>
                     <div className="md:text-lg text-base text-white font-bold">
                        Too Complex to Stick Around
                     </div>
                     <div className="text-base text-white">
                        Users found it hard to explore Web3 with current tools
                        and couldn't find a daily use for it.
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
}
