import { NextComponentType } from "next";
import Image from "next/image";
import OnionTomato from "/public/images/OnionTomato.png";

const FarmLPPoolBar: NextComponentType = () => {
  return (
    <>
      <div className="w-full bg-[#692F84] h-20 rounded-t-2xl flex items-center justify-between px-5 border-b-[1px] border-gray-600">
        <Image src={OnionTomato} alt="" className="w-14" />
        <h1 className="text-xl">양파-토마토 LP</h1>
        <h1 className="rounded-full border-[#4B1464] border-4 px-2">0.25%</h1>
        <div>
          <h1 className="text-sm text-gray-300">Earned</h1>
          <h1>0</h1>
        </div>
        <div>
          <h1 className="text-sm text-gray-300">APR</h1>
          <h1 className="text-[#73FFE6]">🚀 Up to 23.24%</h1>
        </div>
        <div>
          <h1 className="text-sm text-gray-300">Staked Liquidity</h1>
          <h1>$1,232,233</h1>
        </div>
        <div>
          <h1 className="text-sm text-gray-300">Staked</h1>
          <h1>0 LP</h1>
        </div>
      </div>
    </>
  );
};

export default FarmLPPoolBar;
