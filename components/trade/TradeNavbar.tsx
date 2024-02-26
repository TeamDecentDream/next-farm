"use client";

import { FC, useState } from "react";
import CheckReward from "./CheckReward";
import Liquidity from "./Liquidity";
import Swap from "./Swap";

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
        <div className="flex justify-around w-[1000px] mx-auto h-full items-center">
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
      </div>
      <div className="bg-[#E8FFCF] pb-12">{showCurPage()}</div>
    </>
  );
};

export default TradeNavbar;
