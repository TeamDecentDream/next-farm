"use client";
<<<<<<< Updated upstream
=======

import Youtube from "@/components/youtube/_youtube";
import NextFarmLogo from "../public/images/NextFarmLogo.png";
import Wifi from "../public/images/Wifi.png";
import Nx from "../public/images/Nx.png";
import ChartSmall from "../public/images/ChartSmall.png";
import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConnectWalletButton from "@/components/metamask/MetamaskConnect";
>>>>>>> Stashed changes

import Image from "next/image";
import { Button } from "@/components/ui/button";
import wifi from "../public/images/wifi.png";
import nexth from "../public/images/nexth.png";
import Main2 from "../components/main/main2";
import Main3 from "../components/main/main3";
import Main4 from "../components/main/main4";
import Main5 from "../components/main/main5";

export default function page() {
  return (
    <>
<<<<<<< Updated upstream
      <div className="bg-fuchsia-900 min-h-full w-full flex flex-row">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row pl-[120px] pt-[150px]">
              <div className="text-7xl pt-[120px]  text-white">
                <div>넥스트팜이 새로운 농업의 </div>
                <div className="pt-10">시대를 열겠습니다</div>
              </div>
            </div>

            <div className="text-2xl pl-[120px] pt-[30px] text-white">
              <div>양파 대파 버섯 등</div>
              <div className="pt-7">모든작물에 투자할수 있습니다.</div>
            </div>
          </div>
          <div className="flex flex-row text-2xl pl-[120px] pt-[30px]">
            <div>
              <Button variant="secondary" className="hover:text-blue-600">
                Connet Wallet
              </Button>
            </div>
            <div className="pl-7 ">
              <Button variant="secondary" className="hover:text-blue-600">
                Trade Now
              </Button>
            </div>
            <div className="pl-[300px]">
              <Image src={nexth} alt="nexth" width={200} height={200} />
=======
      <div className="flex flex-row p-3 items-center bg-[#E8FFCF] relative ">
        <Image src={NextFarmLogo} alt="NextFarmLogo" className="h-28 w-28" />
        <div className="w-min-screen pl-8 text-5xl text-end text-[#00B050] font-sans  h-[50px]  ">
          NEXT FARM
        </div>

        <div className="pl-16 text-slate-500">
          <a
            href="https://nextfarm-docs.gitbook.io/nextfarm-docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>
        </div>
        <div className="pl-10 text-slate-500"> Community</div>

        <ConnectWalletButton />
      </div>
      <div className="max-w-screen  bg-[#E8FFCF] pt-20 pb-20">
        <div className="w-3/5 mx-auto">
          <Youtube />
          <Image
            src={Wifi}
            alt=""
            className="absolute right-2 h-28 w-28 -translate-y-[400px]"
          />
          <h1 className="text-5xl pt-5 font-bold leading-relaxed">
            넥스트팜이 새로운 농업의 <br />
            시대를 열겠습니다
          </h1>
          <h1 className="font-medium mt-2">
            양파 대파 버섯 등 <br /> 모든 작물에 투자할 수 있습니다.
          </h1>
          <div className="mt-3 flex flex-row justify-between">
            <Link href="/trade">
              <button className="rounded-lg py-[55px] px-16 bg-[#DFE232] text-3xl font-semibold text-orange-900">
                Launch App
              </button>
            </Link>

            <div className="flex flex-col justify-start items-end  translate-x-[250px] translate-y-[40px] ">
              <h1>We launched version 3.</h1>
              <h1>Register for early bird access and earn excess returns</h1>
              <Image src={Nx} alt="Nx" className=" h-28 w-[60px]  " />
            </div>
            <div className="absolute text-sm  pl-10 left-0 translate-y-[200px] flex flex-row  ">
              Asset with NextFarm
              <Image
                src={ChartSmall}
                alt="ChartSmall"
                className=" h-[20px] w-[20px] pl-1 "
              />
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
        <div className="pl-[150px] pt-[200px]">
          <Image src={wifi} alt="wifi" width={500} height={500} />
        </div>
      </div>
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Button
        variant="secondary"
        className="hover:text-blue-600 fixed top-20 left-10 first-letter:hover:bg-red-600"
      >
        지금당장 투자하기
      </Button>
    </>
  );
}
