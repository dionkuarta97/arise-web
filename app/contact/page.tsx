import bg from "../assets/background-image-2.png";

export const metadata = {
   title: "Arise - Contatct Us",
};

export default function ContactUs() {
   return (
      <div
         style={{
            backgroundImage: `url('${bg.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}
         className="flex min-h-screen flex-col items-center justify-between p-24"
      ></div>
   );
}
