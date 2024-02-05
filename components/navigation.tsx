import Image from "next/image";
import FarmIMG from "../public/images/farm.png";
import nzf from "../public/images/nzf.png";
import { NextPage } from "next";

const Navigation: NextPage = () => {
  return (
    <div className="w-full h-14 bg-purple-800 flex ">
      <Image src={FarmIMG} alt="farm" width={50} height={50} />
      <div className="flex flex-row justify-center items-center ">
        <div className="pl-10 text-3xl font-bold text-green-500">NEXT FARM</div>
        <div className="pl-10 hover:text-white">Trade</div>
        <div className="pl-5 hover:text-white">Farm</div>
        <div className="pl-5 hover:text-white">Earn</div>
        <div className="pl-5 -translate-y-1 hover:text-white">...</div>
      </div>
      <div className="flex absolute right-0 flex-row justify-center items-center">
        <Image src={nzf} alt="farm" width={50} height={50} />
        <div className="flex flex-col justify-center  ">$1.095</div>
        <div className="pl-8 hover:text-white">choose</div>
        <div className="pl-8 hover:text-white">chain</div>
        <div className="pl-8 hover:text-white">Connect</div>
        <div className="pl-8 pr-10 hover:text-white">Wallet</div>
      </div>
    </div>
  );
};

export default Navigation;
