import Image from "next/image";
import ChartEx from "/public/images/ChartEx.png";
import NZFToken from "/public/images/NZFToken.png";
import USDT from "/public/images/USDT.png";
import { IoMdRefresh } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { BiDownArrowAlt, BiSolidDownArrow } from "react-icons/bi";
import { FC } from "react";

const Swap: FC = () => {
  return (
    <>
      <div className="flex w-1/2 mx-auto justify-between mt-20">
        <div className="bg-[#B365D5] w-[600px] h-[400px] rounded-2xl px-10 py-5">
          <div className="flex gap-2 items-center">
            <Image src={NZFToken} alt="" className="w-12 h-12" />
            <Image src={USDT} alt="" className="w-10 h-10" />
            <h1 className="text-md font-semibold text-black">NZF/USDT</h1>
          </div>
          <div className="flex justify-between items-end mt-4">
            <div className="flex items-end gap-1">
              <h1 className="text-4xl font-bold text-black">1.09</h1>
              <h1 className=" font-bold text-black">NZF/TETHER</h1>
              <h1 className="text-[#2B631E] font-bold">+0.002(0.88%)</h1>
            </div>

            <div className="rounded-full bg-[#4B1464] ">
              <button className="rounded-full bg-[#7F2CA6] px-4 h-7">
                24H
              </button>
              <button className="rounded-full px-4 ">1W</button>
              <button className="rounded-full px-4 ">1M</button>
            </div>
          </div>
          <Image src={ChartEx} alt="" className="mt-12" />
        </div>
        <div className="bg-[#7F2CA6] w-[300px] h-[600px] rounded-2xl p-5">
          <div className="border-b-[1px] border-white">
            <h1 className="text-3xl font-bold">Swap</h1>
            <h1>Trade tokens an instant</h1>
            <div className="flex flex-row-reverse mt-10 px-2 mb-2 gap-2 items-center">
              <IoSettingsSharp size={18} />
              <IoMdRefresh size={22} />
            </div>
          </div>
          <div>
            <div className="mt-10">
              <div className="flex items-center gap-1">
                <Image src={NZFToken} alt="" className="w-10" />
                <h1>NZF</h1>
                <BiSolidDownArrow size={12} />
              </div>
              <input
                className="h-20 w-full bg-[#B365D5] rounded-xl mt-2"
                type="text"
              />
            </div>
            <BiDownArrowAlt className="mx-auto mt-5" size={30} />
            <div className="mt-2">
              <div className="flex items-center gap-1">
                <Image src={USDT} alt="" className="w-9" />
                <h1>USDT</h1>
                <BiSolidDownArrow size={12} />
              </div>
              <input
                className="h-20 w-full bg-[#B365D5] rounded-xl mt-2"
                type="text"
              />
            </div>
            <button className="h-10 w-full bg-[#B365D5] rounded-xl mt-10 text-center font-semibold">
              Connect wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Swap;
