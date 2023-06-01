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
                           <Image
                              src="/logo.png"
                              alt="Picture of the author"
                              width="0"
                              height="0"
                              sizes="20vh"
                              className="w-32 h-auto"
                           />
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
                                 href="/about"
                                 className={`block md:hover:scale-110 py-2 pl-3 mb-2 md:mb-0 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/about"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 About
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/ourstory"
                                 className={`block py-2 md:hover:scale-110 pl-3 pr-4 mb-2 md:mb-0 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/ourstory"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Our Story
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/web3"
                                 className={`block py-2 md:hover:scale-110 mb-2 md:mb-0 pl-3 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/web3"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Explore Web3
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/solutions"
                                 className={`block py-2 md:hover:scale-110 mb-2 md:mb-0 pl-3 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/solutions"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Our Solutions
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/roadmap"
                                 className={`block py-2 md:hover:scale-110 mb-2 md:mb-0 pl-3 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/roadmap"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Roadmap
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/ourteam"
                                 className={`block py-2 md:hover:scale-110 mb-2 md:mb-0 pl-3 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/ourteam"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Our Team
                              </Link>
                           </li>
                           <li>
                              <Link
                                 onClick={() => {
                                    setShow(false);
                                 }}
                                 href="/contact"
                                 className={`block py-2 md:hover:scale-110 mb-2 md:mb-0 pl-3 pr-4 rounded hover:bg-black md:hover:bg-transparent md:border-0 md:hover:text-teal-200 md:p-0 ${
                                    pathname === "/contact"
                                       ? "text-teal-200"
                                       : "text-white"
                                 }`}
                              >
                                 Contact Us
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </motion.div>
            </header>
            <main>{children}</main>
         </body>
      </html>
   );
}
