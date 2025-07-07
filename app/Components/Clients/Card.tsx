import Image, { StaticImageData } from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface ServicesProps {
  para: string;
  icon: any; 
  image: string | StaticImageData;
  about: string;
}

const Card = ({ para, icon: Icon, image, about }: ServicesProps) => {
  return (
    <div className="bg-white p-6 w-[350px] rounded-lg shadow-md flex flex-col justify-between h-[280px] mb-30">
      
      <div className="text-blue-900 mb-4">
        <Icon size={24} />
      </div>

    
      <p className="text-gray-700 text-sm mb-4">{para}</p>

      
      <div className="flex text-yellow-400 mb-4">
        <FaStar size={16} />
        <FaStar size={16} />
        <FaStar size={16} />
        <FaStar size={16} />
        <FaStar size={16} />
      </div>

      
      <div className="flex items-center pt-5 border-t ">
        <Image
          src={image}
          alt={about}
          width={40}
          height={40}
          className="rounded-full mr-3 "
        />
        <h3 className="text-blue-900 font-bold text-sm">{about}</h3>
      </div>
    </div>
  );
};

export default Card;