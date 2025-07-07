import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";


const Banner = () => {
  return (
    <div>

      <div className=" bg-fixed inset-0  bg-[url('/portrait-professional-young-black-woman-civil-engineer-architecture-worker-wearing-hard-hat-safety-working-construction-site-warehouseusing-laptop-work.jpg')] bg-cover  h-[840px] sm:w-full md:w-full " >
      <div className="  bg-[#0000ff98]  w-[100%] h-[840px]" >
         <Navbar />
        <div className="pt-20 pl-28">
          <h3 className="text-gray-400 font-bold">Construction Services</h3>
          <div className="border-2 w-[50px] text-gray-400 mt-2"></div>
          <h1 className="font-bold md:text-8xl text-5xl pt-10 text-white">Building Your <br /> Dreams</h1>
          <button className="bg-amber-400 p-5 font-bold rounded mt-10  text-white ">GET A QUOTE</button>
        
        </div>
        </div>
        </div>


        <div className=" w-full relative bottom-45">
        <Services />
      
        </div>
      
</div>

  );
};

export default Banner;