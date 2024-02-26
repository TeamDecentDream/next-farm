import Image from "next/image";
import OnionTomato from "/public/images/OnionTomato.png";
import { FC } from "react";

const FarmLPPoolBar: FC = () => {
  return (
    <>
      <div className="w-full h-20 rounded-2xl flex items-center justify-between px-5 border-b-[1px] border-gray-600 text-white">
        <Image src={OnionTomato} alt="" className="w-14" />
        <h1 className="text-xl font-bold">양파-토마토 LP</h1>
        <h1 className="rounded-full bg-[#D9D9D9] px-2 text-black font-bold">
          0.25%
        </h1>
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
