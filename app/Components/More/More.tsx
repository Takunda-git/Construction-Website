import Image from "next/image";
import image from "@/public/imag4e.png";
import MoreCard from "./MoreCard";
import { FaMedal, FaUserTie, FaBuilding } from "react-icons/fa";

const More = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl md:text-6xl text-blue-900 text-center pt-10">
        WHY US?
      </h1>
      <div className="w-[50px] h-1 bg-yellow-400 mx-auto mt-4 mb-12"></div>

     
      <div className="flex justify-center px-4">
        <Image
          src={image}
          alt="why-us"
          width={1140}  
          height={400}
          className="mb-[-6rem] md:mb-[-13rem] max-w-full h-auto"
        />
      </div>

  
      <div className="bg-[#0000ffd0] py-40 md:py-70 px-4 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <MoreCard
            icon={FaMedal}
            about="20+ YEARS EXPERIENCE"
            para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <MoreCard
            icon={FaUserTie}
            about="PROFESSIONAL SERVICES"
            para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
          <MoreCard
            icon={FaBuilding}
            about="100+ COMPLETED PROJECTS"
            para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>

       
        <div className="h-px bg-white mt-12 mx-auto w-full max-w-4xl " />
      </div>
    </div>
  );
};

export default More;