import Card from "./Card";
import { FaYelp } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaHouzz } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const Services = () => {
  return (
   
      
     
      <div className="flex flex-wrap    justify-center  gap-0.5" >
      
        <div className="bg-amber-400 p-6  pt-10  text-white font-bold text-3xl w-[350px]">
          <p>PROFESSIONAL AND RELIABLE SERVICES.</p>
          <div className="border-b-4 border-white w-[50px] mt-6 mb-6"></div>

          <div className="flex space-x-4 mt-4 mb-33 ">
            <FaYelp size={24} className="bg-blue-900 text-white rounded-full p-1" />
            <MdOutlineFacebook size={24} className="bg-blue-900 text-white rounded-full p-1" />
            <FaTwitter size={24} className="bg-blue-900 text-white rounded-full p-1" />
            <FaHouzz size={24} className="bg-blue-900 text-white rounded-full p-1" />
             <FaHouzz size={24} className="bg-blue-900 text-white rounded-full p-1" />
          </div>
        </div>

          <Card
            image="/working-housing-project.jpg"
            about="GENERAL CONTRACT"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            icon={FaPlus}
          />

          <Card
            image="/planning.jpg"
            about="PROJECT PLANNING"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            icon={FaPlus}
          />
         
               
          
             <Card
            image="/site.jpg"
            about="HOUSE REFURBISHMENT"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            icon={FaPlus}
          />

             <Card
            image="/kitchen.jpg"
            about="KITCHEN REMODELING"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            icon={FaPlus}
          />

             <Card
            image="/house.jpg"
            about="HOUSE EXTENSIONS"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            icon={FaPlus}
          />
        </div>
      
        
      
    
  
  );
};

export default Services;