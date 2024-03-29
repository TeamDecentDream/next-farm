import { FC } from "react";
import { IoMdRefresh } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Liquidity: FC = () => {
  return (
    <>
      <div className="flex w-[1000px] mx-auto flex-col h-[80vh]">
        <div className="w-full h-[300px] bg-[#DED689] rounded-t-2xl p-10 mt-20">
          <div>
            <h1 className="text-3xl font-bold">Your Liquidity</h1>
            <div className="flex justify-between mt-5 border-white border-b-[1px] items-center pb-2">
              <h1>List of your liquidity positions</h1>
              <div className="flex items-center gap-2">
                <IoMdRefresh size={46} />
                <IoSettingsSharp size={38} />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 px-3">
            <div className="flex items-center gap-1">
              <MdCheckBoxOutlineBlank size={30} />
              <h1>Hide closed positions</h1>
            </div>
            <div className="rounded-full bg-[#171515] text-white ">
              <button className="rounded-full bg-[#8F8E8E] px-4 h-7 ">
                All
              </button>
              <button className="rounded-full px-4 ">V1</button>
              <button className="rounded-full px-4 ">V2</button>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] h-20"></div>
        <div className="w-full h-[100px] bg-[#DED689] rounded-b-2xl p-6">
          <button className="w-full h-full rounded-full bg-[#5AE0B0] text-2xl font-semibold">
            + Add Liquidity
          </button>
        </div>
      </div>
    </>
  );
};

export default Liquidity;
