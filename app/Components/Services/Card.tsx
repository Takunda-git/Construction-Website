import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

interface ServicesProps {
  image: string | StaticImageData;
  about: string;
  para: string;
  icon: IconType;
}

const Card = ({ image, about, para, icon: Icon }: ServicesProps) => {
  return (
    <div className="bg-white  p-6 w-[350px]   hover:bg-[#a5a4a4] ">
      <Image src={image} alt={about} width={350} height={350}  />
      <h3 className="text-blue-900 font-bold text-lg mb-2">{about}</h3>
      <p className="text-sm text-gray-700 mb-4">{para}</p>
      <Link href="/">
        <div className="text-blue-900 cursor-pointer hover:text-blue-500">
          <Icon size={16} />

        </div>
      </Link>
    </div>
  );
};

export default Card;