"use client";
import bg from "../assets/background-image-2.png";
import { motion } from "framer-motion";
import { portofolios } from "./data";
import { useRouter } from "next/navigation";

export default function Portofolio(a: any) {
   const router = useRouter();
   return (
      <div
         style={{
            backgroundImage: `url('${bg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
         className="flex h-screen flex-col items-center md:justify-center p-24"
      >
         <div className="flex md:flex-row h-full  flex-col w-96 md:mt-0 mt-8 items-center md:justify-start md:w-screen md:px-20">
            <motion.div
               initial={{ x: -800 }}
               animate={{ x: 0 }}
               transition={{ duration: 0.5 }}
               className="md:w-2/6 w-11/12 flex md:justify-center"
            >
               <div className="flex md:items-center flex-col">
                  <div className={"md:text-4xl  text-3xl font-bold text-white"}>
                     Portofolio Kami
                  </div>
               </div>
            </motion.div>
            <div className="md:ml-auto md:h-5/6 h-full overflow-y-scroll md:w-4/6 w-11/12 md:mt-0 mt-8">
               <div className="md:mt-12 grid md:grid-cols-3 grid-flow-row gap-4">
                  {portofolios.map((el, idx) => (
                     <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                           duration: 1,
                           type: "spring",
                           stiffness: 100,
                        }}
                        style={{
                           backgroundImage: `url('/ourstory-card.png')`,
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                        }}
                        className="md:p-8 p-3  rounded-lg md:w-full flex-col"
                     >
                        <div className="md:text-2xl text-xl text-white md:mb-2">
                           <p className="line-clamp-1">{el.name}</p>
                        </div>
                        <div className="mt-4 text-base text-white">
                           <p className="line-clamp-2">{el.desc}</p>
                        </div>
                        <button
                           onClick={() =>
                              router.push("/portofolio/" + Number(idx + 1))
                           }
                           className="border mt-4  text-center text-white py-1  px-5 bg-white bg-opacity-10 active:bg-opacity-0 active:scale-95 rounded-lg"
                        >
                           see more
                        </button>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
