import Image from "next/image";
import image from "@/public/image.1.png";
import pic1 from "@/public/image.2.png";
import pic2 from "@/public/image.3.png";
import pic3 from "@/public/image4.png";
import pic4 from "@/public/image5.png";
import pic5 from "@/public/image6.png";

const Dream = () => {
  return (
    <div className="w-full">

     
      <div className="bg-[url('/scene.jpg')] bg-cover h-screen md:h-[700px]">
        <div className="bg-[#0000ffd0] w-full h-full flex items-center justify-center px-4">
          <div className="text-center max-w-xl">
            <div className="border-2 w-[50px] mx-auto text-gray-400 mb-4" />
            <h1 className="text-white font-bold text-4xl md:text-6xl leading-tight">
              LET'S BUILD YOUR <br /> DREAMS
            </h1>
            <p className="text-gray-300 mt-6 text-sm md:text-base">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>
            <button className="bg-amber-400 px-6 py-3 mt-8 text-white font-bold rounded">
              CONTACT US
            </button>
          </div>
        </div>
      </div>

    
      <div className="bg-amber-400 flex  justify-evenly items-center  py-10 px-4 overflow-hidden">
        <Image src={image} alt="logo-1"    />
        <Image src={pic1} alt="logo-2"   />
        <Image src={pic2} alt="logo-3"    />
        <Image src={pic3} alt="logo-4"   />
        <Image src={pic4} alt="logo-5"   />
        <Image src={pic5} alt="logo-6"  />
      </div>

    </div>
  );
};

export default Dream;