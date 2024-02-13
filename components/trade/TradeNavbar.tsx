"use client";

import { FC, useState } from "react";
import Image from "next/image"; // Image 컴포넌트를 가져옵니다.
import Swap from "./Swap";
import Liquidity from "./Liquidity";
import CheckReward from "./CheckReward";
import NextFarmLogo from "../../public/images/NextFarmLogo.png";
import NZFToken from "../../public/images/NZFToken.png";
import Fix from "../../public/images/fix.png";
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
      <div className="max-w-screen bg-[#E8FFCF] h-10 flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Image
            src={NextFarmLogo}
            alt="NextFarmLogo"
            className="h-10 w-10 ml-3 "
          />
          <Link href="/">
            <button className="text-2xl pl-3 text-[#00B050] font-sans">
              NEXT FARM
            </button>
          </Link>
          <button className="pl-5">Trade</button>
          <button className="pl-5">Farm</button>
          <button className="pl-5">Earn</button>
          <h2>...</h2>
        </div>
        <div className="flex items-center gap-3 pr-5">
          <Image src={NZFToken} alt="NZFToken" className="h-10 w-10 ml-3 " />
          <h2>$1.095</h2>
          <Image src={Fix} alt="NZFToken" className="h-7 w-7 ml-3 " />
          <button>Choose chain</button>
          <button>Connect Wallet</button>
        </div>
      </div>
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
            Buy Crypto
          </button>
        </div>
        {showCurPage()}
      </div>
    </>
  );
};

export default TradeNavbar;
