"use client";
import { useRouter } from "next/navigation";
import bg from "../assets/background-image-2.png";
import { motion } from "framer-motion";

export default function Services() {
   const route = useRouter();
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
         <div className="flex md:flex-row h-full  flex-col w-96 md:mt-0 mt-8 items-center md:justify-start md:w-screen md:px-20">
            <motion.div
               initial={{ x: -800 }}
               animate={{ x: 0 }}
               transition={{ duration: 0.5 }}
               className="md:w-2/6 w-11/12 flex md:justify-center"
            >
               <div className="flex md:items-center flex-col">
                  <div className={"md:text-4xl text-3xl font-bold text-white"}>
                     Servis Kami
                  </div>
                  <div className="flex flex-row gap-x-4">
                     <a
                        target="_blank"
                        href="https://wa.me/+6281378957046"
                        className="border mt-4 text-center text-white md:py-3 py-1 md:px-16 px-5 bg-white bg-opacity-10 active:bg-opacity-0 active:scale-95 rounded-lg"
                     >
                        Kontak Kami
                     </a>
                     <button
                        onClick={() => route.push("/portofolio")}
                        className="border mt-4  text-center text-white md:py-3 py-1 md:px-16 px-5 bg-white bg-opacity-10 active:bg-opacity-0 active:scale-95 rounded-lg"
                     >
                        Portofolio
                     </button>
                  </div>
               </div>
            </motion.div>
            <div className="md:ml-auto md:w-4/6 w-11/12 md:mt-0 mt-8">
               <div className="md:mt-12 grid md:grid-cols-3 grid-flow-row gap-4">
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
                     className="md:p-8 p-3  rounded-lg md:w-full flex-col"
                  >
                     <div className="md:text-2xl text-xl text-white md:mb-2">
                        IT Consultant
                     </div>
                     <div className="mt-4 text-base text-white">
                        Memberikan pelayanan konsultasi pengembangan bisnis dan
                        pemecahan masalah IT dengan inovatif.
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
                     className="md:p-8 p-3 md:w-full rounded-lg md:w-1/3 flex-col"
                  >
                     <div className="md:text-2xl text-xl text-white md:mb-2">
                        Website Profil
                     </div>
                     <div className="mt-4 text-base text-white">
                        Melayani pembuatan website profil perusahaan atau
                        individu dengan desain terkonsep dan profesional
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
                     className="md:p-8 p-3 md:w-full rounded-lg md:w-1/3 flex-col"
                  >
                     <div className="md:text-2xl text-xl text-white md:mb-2">
                        Web Aplikasi
                     </div>

                     <div className="mt-4 text-base text-white">
                        Melayani pembuatan Web Aplikasi untuk kebutuhan atau
                        manajemen bisnis anda menjadi lebih efektif dan efisien.
                     </div>
                  </motion.div>
                  <motion.div
                     initial={{ x: 30, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{
                        duration: 1,
                        delay: 2.5,
                        type: "spring",
                        stiffness: 100,
                     }}
                     style={{
                        backgroundImage: `url('/ourstory-card.png')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                     }}
                     className="md:p-8 p-3 md:w-full  rounded-lg md:w-1/3 flex-col"
                  >
                     <div className="md:text-2xl text-xl text-white md:mb-2">
                        Mobile Android & iOS
                     </div>
                     <div className="mt-4 text-base text-white">
                        Melayani pembuatan aplikasi android dan IOS sesuai
                        dengan apa yang anda inginkan untuk mengembangkan bisnis
                        anda.
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
}
