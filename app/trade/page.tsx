import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/metamask/authContext";
import TradeNavbar from "@/components/trade/TradeNavbar";
import { NextPage } from "next";

const Trade: NextPage = () => {
  return (
    <>
      <div className="max-w-screen bg-[#E8FFCF]">
        <Navbar />
        <TradeNavbar />
      </div>
    </>
  );
};

export default Trade;
