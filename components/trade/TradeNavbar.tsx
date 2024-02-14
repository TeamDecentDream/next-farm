"use client";

import { FC, useState } from "react";
import Image from "next/image"; // Image 컴포넌트를 가져옵니다.
import Swap from "./Swap";
import Liquidity from "./Liquidity";
import CheckReward from "./CheckReward";
import NextFarmLogo from "../../public/images/NextFarmLogo.png";

import Link from "next/link";

const TradeNavbar: FC = () => {
  const [curTradeBar, setCurTradeBar] = useState(0);

  function showCurPage() {
    if (curTradeBar === 0) {
      return <Swap />;
    } else if (curTradeBar === 1) {
      return <Liquidity />;
    } else if (curTradeBar === 2) {
      return <CheckReward />;
    }
    return null;
  }

  return (
    <>
      <div className="max-w-screen bg-[#96AA47] h-12">
        <div className="flex justify-around w-1/2 mx-auto h-full items-center">
          <button
            onClick={() => setCurTradeBar(0)}
            className={`${curTradeBar === 0 ? "text-[#2A2D14]" : ""}`}
          >
            Swap
          </button>
          <button
            onClick={() => setCurTradeBar(1)}
            className={`${curTradeBar === 1 ? "text-[#2A2D14]" : ""}`}
          >
            Liquidity
          </button>
          <button
            onClick={() => setCurTradeBar(2)}
            className={`${curTradeBar === 2 ? "text-[#2A2D14]" : ""}`}
          >
            Check Reward
          </button>
        </div>
        {showCurPage()}
      </div>
    </>
  );
};

export default TradeNavbar;
