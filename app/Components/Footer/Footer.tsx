import Link from "next/link";
import { FaPhone, FaEnvelope, FaLocationPin } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import imagef from "@/public/imagef.png";
import imageff from "@/public/imageff.png";
import imagefff from "@/public/imagefff.png";
import imageffff from "@/public/imageffff.png";

const Footer = () => {
  return (
    <div className="bg-blue-950  text-white overflow-hidden">
  
      <div className="flex flex-col md:flex-row justify-between gap-10 px-10 py-12">
        
      
        <div>
        <div className="bg-gradient-to-b from-white to-yellow-400 bg-clip-text text-transparent"><Link href="/" className="font-bold text-2xl bg-gradient-to-b from-white to-yellow-400 bg-clip-text text-transparent">CONS<span className="bg-gradient-to-b from-white to-yellow-400 text-black">TRUC</span>TION</Link></div>

          <div className="mt-6 flex items-center">
            <FaPhone className="text-yellow-400 mr-4" /> 929-242-6868
          </div>

          <div className="mt-3 flex items-center">
            <FaEnvelope className="text-yellow-400 mr-4" /> contact@info.com
          </div>

          <div className="mt-3 flex items-center">
            <FaLocationPin className="text-yellow-400 mr-4" />
            123 Fifth Avenue,<br />New York, NY 10160
          </div>
        </div>

        <div>
          <h1 className="text-white font-bold mb-4">OUR SERVICES</h1>

          <div className="mb-2">
            <p className="flex items-center">
              <FaAngleRight className="text-yellow-400 mr-3" /> General Contract
            </p>
            <div className="border-t border-gray-400 w-40 mt-1" />
          </div>

          <div className="mb-2">
            <p className="flex items-center">
              <FaAngleRight className="text-yellow-400 mr-3" /> Project Planning
            </p>
            <div className="border-t border-gray-400 w-40 mt-1" />
          </div>

          <div className="mb-2">
            <p className="flex items-center">
              <FaAngleRight className="text-yellow-400 mr-3" /> House Refurbishment
            </p>
            <div className="border-t border-gray-400 w-45 mt-1" />
          </div>

          <div className="mb-2">
            <p className="flex items-center">
              <FaAngleRight className="text-yellow-400 mr-3" /> Kitchen Remodeling
            </p>
            <div className="border-t border-gray-400 w-43 mt-1" />
          </div>

          <div className="mb-2">
            <p className="flex items-center">
              <FaAngleRight className="text-yellow-400 mr-3" /> Interior Design
            </p>
            <div className="border-t border-gray-400 w-35 mt-1" />
          </div>

          <div className="mb-2">
            <p className="flex items-center">
              <FaAngleRight className="text-yellow-400 mr-3" /> House Extension
            </p>
            <div className="border-t border-gray-400 w-40 mt-1" />
          </div>
        </div>

    
        <div>
          <h3 className="text-white font-bold mb-3">A Few Words About Us</h3>
          <p className="text-white mb-4 max-w-xs">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>

          <div className="flex space-y-5 md:space-x-5 pt-10 flex-col md:flex-row items-center ">
            <Image src={imagef} alt="logo1" width={70} height={70} />
            <Image src={imageff} alt="logo2" width={70} height={70} />
            <Image src={imagefff} alt="logo3" width={70} height={70} />
            <Image src={imageffff} alt="logo4" width={70} height={70} />
          </div>
        </div>
      </div>
      <div className="bg-blue-900  "><p className="flex justify-center text-white py-5">Copyright © 2025 Construction | Powered by Construction</p></div>
    </div>
  );
};

export default Footer;