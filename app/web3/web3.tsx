"use client";
import Image from "next/image";
import bg from "../assets/background-image-2.png";
import { motion } from "framer-motion";

const lists: { image: string; title: string }[] = [
   {
      image: "/1.png",
      title: "Multichain Non-Custodial",
   },
   {
      image: "/2.png",
      title: "Payment Solution",
   },
   {
      image: "/3.png",
      title: "Fiat Off-Ramp",
   },
   {
      image: "/4.png",
      title: "Fiat On-Ramp",
   },
   {
      image: "/5.png",
      title: "Easy Login",
   },
   {
      image: "/6.png",
      title: "NFT Friendly",
   },
   {
      image: "/7.png",
      title: "Services and D’apps Store",
   },
];

const images: { image: string }[] = [
   { image: "/homescreen.png" },
   { image: "/allwalletscreen.png" },
   { image: "/sendfiatscreen.png" },
];

export default function Web3() {
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
         <div className="flex md:flex-row flex-col w-96 md:mt-0 md:mt-8 items-center md:justify-start md:w-screen md:space-x-16 md:px-24">
            <div className="md:w-2/6 w-11/12 flex-col">
               <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                     duration: 1.5,
                     type: "spring",
                  }}
                  className={"md:text-4xl text-xl font-bold text-white"}
               >
                  Explore Web3 seamlessly
               </motion.div>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                     duration: 2,
                  }}
                  className={
                     "md:text-lg text-base text-white mb-2 mt-4 md:mb-10 md:mt-12"
                  }
               >
                  We believe the widespread embrace of Web3 hinges upon its
                  seamless integration into our everyday interactions with
                  businesses and services.
               </motion.div>
               {lists.map((el) => (
                  <div
                     key={el.image}
                     className="flex md:space-x-5 space-x-1 flex-row w-full md:mt-2 mt-1 items-center"
                  >
                     <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                           duration: 1.5,
                           type: "spring",
                        }}
                        className={
                           "md:text-lg md:w-1/12 w-1/12 text-lg text-white"
                        }
                     >
                        <Image
                           src={el.image}
                           alt="1 test"
                           width="0"
                           height="0"
                           sizes="200vh"
                           style={{
                              WebkitFilter: "drop-shadow(50px 50px 50px #000)",
                              filter: "drop-shadow(50px 50px 50px #000)",
                           }}
                           className="md:w-2/3 w-2/3 h-auto"
                        />
                     </motion.div>
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                           duration: 2,
                        }}
                        className={"md:text-lg text-base md:w:10/12 text-white"}
                     >
                        {el.title}
                     </motion.div>
                  </div>
               ))}
            </div>
            <motion.div
               initial={{ x: 800, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{
                  duration: 1.5,
                  type: "spring",
               }}
               className="md:ml-auto overflow-x-auto flex md:w-4/6 w-11/12 md:mt-0 md:mt-12 mt-8 space-x-6 md:px-12"
            >
               {images.map((el) => (
                  <div
                     key={el.image}
                     className={
                        "md:text-lg md:w-5/12 w-5/12 flex-shrink-0 md:p-4 text-lg text-white"
                     }
                  >
                     <Image
                        src={el.image}
                        alt="homescreen"
                        width="0"
                        height="0"
                        sizes="200vh"
                        style={{
                           WebkitFilter: "drop-shadow(5px 5px 5px #000)",
                           filter: "drop-shadow(5px 5px 5px #000)",
                        }}
                        className="md:w-11/12 w-full h-auto"
                     />
                  </div>
               ))}
            </motion.div>
         </div>
      </div>
   );
}
