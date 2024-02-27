import { FC } from "react";
import { FaCheckSquare } from "react-icons/fa";
import Navbar from "../Navbar";

import { FaSearch } from "react-icons/fa";
import Youtube from "@/components/youtube/_youtube";
import Image from "next/image";
import NextFarmLogo from "@/public/images/NextFarmLogo.png";

const DetailsPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  pt-[100px]  items-center   bg-[#E8FFCF]">
        <h1 className="text-[#5AC833] text-5xl">NEXT FARM </h1>
        <h1 className="text-[#5AC833] text-5xl pt-10 pb-20 ">MY DETAIL'S</h1>
        <div>
          <div className="flex flex-col bg-[#D89004] w-[700px] h-[600px] px-16 py-8 -translate-x-[100px]  rounded-l-lg  ">
            <div className="flex flex-row justify-between items-center mb-10">
              <h1 className="text-3xl italic font-bold">MY DEPOSIT YEILD</h1>
              <div className="flex flex-row items-center text-xl bg-white border-black rounded-full px-6 py-3">
                <FaSearch />
                <h1 className="pl-5">토큰 / 랜드 명</h1>
              </div>
            </div>
            <div className="bg-[#D9D9D9] h-[500px] p-3">
              <div className="flex flex-row justify-between  text-xl italic font-bold mb-2">
                <h1>wallet</h1>
                <div className="flex items-center">
                  <FaCheckSquare />
                  보유자산만
                </div>
              </div>

              <div className="border-b border-gray-400"></div>
              <div className="flex flex-row justify-between   ">
                <h1>농장</h1>
                <h1>투자중/진행중</h1>
                <h1>가격</h1>
                <h1>최근7일</h1>
                <h1>평가금액</h1>
              </div>
              <div className="border-b border-gray-400"></div>
            </div>
          </div>

          <div className="flex flex-col bg-[#D89004] w-[700px] h-[600px] px-16 py-8  rounded-r-lg  mt-20 translate-x-[100px]">
            <div className="flex flex-row justify-between items-center mb-10">
              <div className="flex flex-row items-center text-xl bg-white border-black rounded-full px-6 py-3">
                <FaSearch /> <h1 className="pl-5">랜드 명</h1>
              </div>
              <h1 className="text-3xl italic font-bold">MY LAND DETAIL'S</h1>
            </div>
            <div className="bg-[#D9D9D9] h-[500px] p-3">
              <div className="flex flex-row justify-between  text-xl italic font-bold mb-2">
                <h1>wallet</h1>
                <div className="flex items-center">
                  <FaCheckSquare />
                  보유자산만
                </div>
              </div>
              <div className="border-b border-gray-400"></div>
              <div className="flex flex-row justify-between   ">
                <h1>농장</h1>
                <h1>보유중</h1>
                <h1>비료/사료</h1>
                <h1>농부정보</h1>
                <h1>땅 위치</h1>
              </div>
              <div className="border-b border-gray-400"></div>
            </div>
          </div>

          <div className="flex flex-col bg-[#D89004] w-[700px] h-[600px] px-16 py-8 rounded-lg  mt-20 ">
            <div className="flex flex-row justify-between items-center mb-10">
              <h1 className="text-3xl italic font-bold">LAND YOUTUBE(CCTV)</h1>
              <div className="flex flex-row items-center text-xl bg-white border-black rounded-full px-6 py-3">
                <FaSearch /> <div className="pl-5">랜드 명</div>
              </div>
            </div>
            <Youtube
              src={"https://www.youtube.com/watch?v=SvD9fIKSwAQ"}
              width="600"
              height="400"
            />
          </div>
        </div>
        <div className="mt-20">
          <Image
            src={NextFarmLogo}
            alt="NextFarmLogo"
            className="h-[500px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
