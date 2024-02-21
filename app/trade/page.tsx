import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/components/metamask/authContext";
import TradeNavbar from "@/components/trade/TradeNavbar";
import { NextPage } from "next";

const Trade: NextPage = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <TradeNavbar />
        <div className="max-w-screen h-screen bg-[#E8FFCF] pt-20"></div>
      </AuthProvider>
    </>
  );
};

export default Trade;
