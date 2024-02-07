"use client";

import { FC, useState } from "react";
import Swap from "./Swap";
import Liquidity from "./Liquidity";
import BuyCrypto from "./BuyCrypto";
import CheckReward from "./CheckReward";

const TradeNavbar: FC = () => {
  function showCurPage() {
    if (curTradeBar == 0) {
      return <Swap />;
    } else if (curTradeBar == 1) {
      return <Liquidity />;
    } else if (curTradeBar == 2) {
      return <BuyCrypto />;
    } else if (curTradeBar == 3) {
      return <CheckReward />;
    }
  }

  const [curTradeBar, setCurTradeBar] = useState(0);
  return (
    <>
      <div className="max-w-screen bg-[#3E1C4F] h-12">
        <div className="flex justify-around w-1/2 mx-auto h-full items-center">
          <button
            onClick={() => setCurTradeBar(0)}
            className={`${curTradeBar === 0 ? "text-[#B365D5]" : ""}`}
          >
            Swap
          </button>
          <button
            onClick={() => setCurTradeBar(1)}
            className={`${curTradeBar === 1 ? "text-[#B365D5]" : ""}`}
          >
            Liquidity
          </button>
          <button
            onClick={() => setCurTradeBar(2)}
            className={`${curTradeBar === 2 ? "text-[#B365D5]" : ""}`}
          >
            Buy Crypto
          </button>
          <button
            onClick={() => setCurTradeBar(3)}
            className={`${curTradeBar === 3 ? "text-[#B365D5]" : ""}`}
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
