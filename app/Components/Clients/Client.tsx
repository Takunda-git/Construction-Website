import Card from "./Card";
import { FaQuoteLeft } from "react-icons/fa";

const Client = () => {
  return (
    <div>
      <h1 className="font-bold text-6xl text-cyan-900 pt-20 text-center">
        OUR HAPPY CLIENTS!
      </h1>

      <div className="border-2 w-[50px] text-cyan-900 mt-5 mx-auto"></div>

      <div className="flex justify-center gap-5 pt-10 flex-col md:flex-row items-center ">
        <Card
          icon={FaQuoteLeft}
          para="Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur."
          image="/image1.png"
          about="JEMMA STONE"
        />

        <Card
          icon={FaQuoteLeft}
          para="Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur."
          image="/image2.png"
          about="JOE KELLY"
        />

        <Card
          icon={FaQuoteLeft}
          para="Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur."
          image="/imag3e.png"
          about="STELLAR ALBA"
        />
      </div>
    </div>
  );
};

export default Client;