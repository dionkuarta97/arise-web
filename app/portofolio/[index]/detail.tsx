"use client";

import { portofolios } from "../data";

import bg from "../../assets/background-image-2.png";
import { useRouter } from "next/navigation";

type Params = {
   params: {
      index: number;
   };
};

export default function Detail({ params: { index } }: Params) {
   const detail = portofolios[index - 1];
   const router = useRouter();
   return (
      <div
         style={{
            backgroundImage: `url('${bg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
         className="flex flex-col  md:items-center  h-screen pt-36 pl-8 md:p-40"
      >
         <div className="flex-col gap-y-8 flex">
            <button
               onClick={() => router.back()}
               className="border mt-4 md:w-3/12 w-1/2 text-white py-1  px-5 bg-white bg-opacity-10 active:bg-opacity-0 active:scale-95 rounded-lg"
            >
               kembali
            </button>
            <div className="text-white text-2xl text-bold">{detail?.name}</div>
            <div className="text-white">{detail?.desc}</div>
            <div className="text-white text-bold">Fitur :</div>
            <div className="flex flex-col gap-y-2">
               {detail?.fitur.map((el, idx) => (
                  <div
                     key={idx + "fitur"}
                     className="text-white"
                  >
                     {idx + 1}. {el}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
