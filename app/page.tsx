"use client";

import Youtube from "@/components/home/youtube/_youtube";
import NextFarmLogo from "../public/images/NextFarmLogo.png";
import Wifi from "../public/images/Wifi.png";
import Nx from "../public/images/Nx.png";
import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/components/metamask/authContext";
import YouTube from "react-youtube";

const Home: NextPage = () => {
  const { isLoggedIn, login, shortenAccount } = useAuth();
  return (
    <>
      <div
        className="max-w-screen bg-[#E8FFCF]  pb-20"
        style={{ backgroundImage: "url('/images/yytt.jpg')" }}
      >
        <div className="flex flex-row p-3 items-center  relative  ">
          <Image src={NextFarmLogo} alt="NextFarmLogo" className="h-28 w-28" />
          <div className="w-min-screen pl-8 text-5xl text-end text-[#00B050] font-sans  h-[50px]  ">
            NEXT FARM
          </div>

          <div className="pl-16 text-yellow-300 ">
            <a
              href="https://nextfarm-docs.gitbook.io/nextfarm-docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </div>
          <div className="pl-10 text-yellow-300"> Community</div>
          <button
            className="rounded-lg absolute px-6 top-3 right-3 py-[15px] bg-[#000000] connect-wallet-button text-green-100"
            onClick={login}
          >
            {isLoggedIn ? account : "Connect Wallet"}
          </button>
        </div>
        <div className="w-[900px] mx-auto">
          <YouTube
            videoId="IXl_CJ6slEI" //동영상 주소
            opts={{
              width: "1140px",
              height: "620px",
              playerVars: {
                autoplay: 1, //자동 재생 여부
                modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                loop: 1, //반복 재생
                playlist: "-JhoMGoAfFc", //반복 재생으로 재생할 플레이 리스트
              },
            }}
            onReady={(e) => {
              e.target.mute(); //소리 끔
            }}
          />

          <h1 className="text-5xl text-green-100 pt-5 font-bold leading-relaxed ">
            넥스트팜이 새로운 농업의 <br />
            시대를 열겠습니다
          </h1>
          <h1 className="font-medium mt-2 text-green-100">
            양파 대파 버섯 등 <br /> 모든 작물에 투자할 수 있습니다.
          </h1>
          <div className="mt-3 flex flex-row justify-between">
            <Link href="/trade">
              <button className="rounded-lg py-[55px] px-16 bg-[#000000] opacity-80  text-3xl font-semibold text-green-300">
                Launch App
              </button>
            </Link>


            <div className="flex flex-col justify-start items-end text-yellow-300  translate-x-[250px] translate-y-[40px] ">

              <h1>We launched version 3.</h1>
              <h1>Register for early bird access and earn excess returns</h1>
              <Image src={Nx} alt="Nx" className=" h-28 w-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
