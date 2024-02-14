import Navbar from "@/components/Navbar";
import FarmFilterBox from "@/components/farm/FarmFilterBox";
import FarmLPPoolBar from "@/components/farm/FarmLPPoolBar";
import { NextPage } from "next";

const Farm: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen h-screen bg-[#E8FFCF] pt-20">
        <FarmFilterBox />
        <div className="w-[800px] bg-[#2F2B2B] rounded-2xl mx-auto mt-20">
          <FarmLPPoolBar />
          <FarmLPPoolBar />
          <FarmLPPoolBar />
          <FarmLPPoolBar />
          <FarmLPPoolBar />
        </div>
      </div>
    </>
  );
};

export default Farm;
