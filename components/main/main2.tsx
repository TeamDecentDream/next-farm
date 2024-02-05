import { NextPage } from "next";
import tree from "../../public/images/tree.png";
import pot from "../../public/images/pot.png";
import Image from "next/image";

const main2: NextPage = () => {
  return (
    <>
      <div className="bg-purple-400 min-w-screen min-h-full flex relative flex-col ">
        <div className="flex flex-col justify-center items-center pt-[150px]">
          <div className="text-6xl text-yellow-500">
            농업 디파이 생태계를 선도하는 NEXTFARM의
          </div>
          <div className="text-6xl text-yellow-500 pt-10">
            새로운 기능들을 직접 써보세요
          </div>
        </div>

        <div className="flex flex-row justify-center pt-[150] gap-10">
          <div className=" flex flex-col justify-center items-center">
            <div className="text-white">Total Users:</div>
            <div className="text-7xl text-yellow-700">$333,333</div>
            <div>in the last 30 days</div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="text-white">Total Traders:</div>
            <div className="text-7xl text-yellow-700">$333,333</div>
            <div>in the last 30 days</div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <div className="text-white">Total Value Locked:</div>
            <div className="text-7xl text-yellow-700">$333,333</div>
            <div>in the last 30 days</div>
          </div>
        </div>
        <div className="flex flex-row justify-center pt-[200px] text-5xl font-extrabold gap-10">
          <button className="bg-white p-5  rounded-full text-red-600">
            Tron
          </button>
          <button className="bg-white p-5 rounded-full text-purple-600">
            Solana
          </button>
          <button className="bg-white p-5 rounded-full text-yellow-600">
            BNB CHAIN
          </button>
          <button className="bg-white p-5 rounded-full text-blue-400">
            ETHEREUM
          </button>
          <button className="bg-white p-5 rounded-full text-red-600">
            AVAX
          </button>
          <button className="bg-white p-5 rounded-full text-blue-600">
            BLUR
          </button>
          <button className="bg-white p-5 rounded-full text-emerald-600">
            LINEA
          </button>
          <button className="bg-white p-5 rounded-full text-blue-200">
            DOT
          </button>
        </div>
        <div className="absolute left-0">
          <Image src={tree} alt="tree" width={200} height={200} />
        </div>
        <div className="absolute right-0 bottom-0">
          <Image src={pot} alt="pot" width={200} height={200} />
        </div>
      </div>
    </>
  );
};

export default main2;
