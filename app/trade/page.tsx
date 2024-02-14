import Navbar from "@/components/Navbar";
import TradeNavbar from "@/components/trade/TradeNavbar";
import { NextPage } from "next";

const Trade: NextPage = () => {
  return (
    <>
      <Navbar />
      <TradeNavbar />
      <div className="max-w-screen h-screen bg-[#E8FFCF] pt-20"></div>
    </>
  );
};

export default Trade;
