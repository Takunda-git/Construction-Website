import { IconType } from "react-icons";

interface ServicesProps {
  about: string;
  para: string;
  icon: IconType; 
}

const MoreCard = ({ about, para, icon: Icon }: ServicesProps) => {
  return (
    <div className="flex flex-col items-center text-white text-center space-y-5">
 
      <div className="h-[70px] w-[70px] bg-white rounded-full flex justify-center items-center">
        <Icon size={30} className="text-yellow-500" />
      </div>

   
      <h2 className="font-bold text-lg">{about}</h2>

    
      <p className="text-sm text-gray-300 max-w-xs">{para}</p>
    </div>
  );
};

export default MoreCard;