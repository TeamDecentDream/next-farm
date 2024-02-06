import FarmFilterBox from "@/components/farm/FarmFilterBox";
import FarmLPPoolBar from "@/components/farm/FarmLPPoolBar";
import { NextPage } from "next";

const Farm: NextPage = () => {
  return (
    <>
      <div className="max-w-screen h-screen bg-[#4B1464] pt-20">
        <FarmFilterBox />
        <div className="w-1/2 h-1/2 bg-[#692F84] rounded-2xl mx-auto mt-20">
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
