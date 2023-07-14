"use client";

import Link from "next/link";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const sans = DM_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   const [show, setShow] = useState(false);
   const pathname = usePathname();

   return (
      <html lang="en">
         <body
            className={sans.className}
            style={{
               backgroundColor: "black",
            }}
         >
            <header>
               <motion.div
                  initial={{ x: show ? -300 : 0 }}
                  animate={{ x: 0 }}
                  style={{
                     backgroundColor: show ? "#042626" : "",
                  }}
                  transition={{ duration: 0.3 }}
                  key={show ? "oke" : undefined}
                  className={`items-start z-50 absolute  ${
                     pathname === "/" && "bg-black"
                  } ${!show ? "bg-opacity-30" : "h-screen"} w-screen`}
               >
                  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                     {!show && (
                        <Link
                           onClick={() => {
                              setShow(false);
                           }}
                           href={"/"}
                           className="flex items-center md:hover:scale-110"
                        >
                           <img
                              alt="Picture of the author"
                              className="w-7 h-auto"
                              src="/logo.png"
                           />
                           <div className="md:text-2xl md:ml-4 ml-2 text-xl text-white">
                              MAZRI TECH
                           </div>
                        </Link>
                     )}

                     {!show ? (
                        <button
                           onClick={() => {
                              setShow(!show);
                           }}
                           type="button"
                           className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden"
                        >
                           <svg
                              width="30"
                              height="30"
                              viewBox="0 0 30 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M0 25H30V21.6667H0V25ZM0 16.6667H30V13.3333H0V16.6667ZM0 5V8.33333H30V5H0Z"
                                 fill="white"
                              />
                           </svg>
                        </button>
                     ) : (
                        <div className="w-screen flex justify-end">
                           <button
                              onClick={() => {
                                 setShow(!show);
                              }}
                              type="button"
                              className="p-2 self-end text-sm text-gray-200 rounded-lg md:hidden"
                           >
                              <svg
                                 width="30"
                                 height="30"
                                 viewBox="0 0 30 30"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z"
                                    fill="white"
                                 />
                              </svg>
                           </button>
                        </div>
                     )}

                     <div
                        className={`${
                           show ? "block" : "hidden"
                        } md:block md:w-auto w-full`}
                     >
                        <ul className="font-medium flex flex-col md:p-0 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/"
                                 className={`block md:hover:scale-110 py-2 pl-3 mb-2 md:mb-0 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Home
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/services"
                                 className={`block py-2 md:hover:scale-110 pl-3 pr-4 mb-2 md:mb-0 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname.includes("services")
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Services
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/portofolio"
                                 className={`block py-2 md:hover:scale-110 pl-3 pr-4 mb-2 md:mb-0 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname.includes("portofolio")
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Portofolio
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </motion.div>
            </header>
            <main>{children}</main>
            <footer>
               <div
                  className={`w-screen  bottom-0 ${
                     pathname === "/" ? "bg-emerald-800" : "bg-black"
                  }  flex md:px-32 bg-opacity-40 flex-wrap items-center justify-between mx-auto p-6`}
               >
                  <div className="text-white">Alamat:</div>
                  <div className="text-white">
                     Kecamatan Harau, Kabupaten Lima Puluh Kota, Provinsi
                     Sumatera Barat
                  </div>
               </div>
            </footer>
         </body>
      </html>
   );
}
