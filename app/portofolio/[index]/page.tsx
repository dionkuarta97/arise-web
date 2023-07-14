import { portofolios } from "../data";
import Detail from "./detail";

export const metadata = {
   title: "Mazri Tech - Detail Portofolio",
};

type Params = {
   params: {
      index: number;
   };
};

export async function generateStaticParams() {
   let temp: any[] = [];
   for (const key in portofolios) {
      let num = +key + 1;
      temp.push({ index: num.toString() });
   }
   return temp;
}

export default function page({ params }: any) {
   return <Detail params={params} />;
}
