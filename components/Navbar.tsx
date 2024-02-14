import Image from "next/image";
import NextFarmLogo from "/public/images/NextFarmLogo.png";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <>
      <div className="max-w-screen bg-[#3E1C4F] h-16">
        <div className="flex justify-between w-1/2 mx-auto h-full items-center">
          <div className="flex w-[500px] justify-between items-center pr-5">
            <Link href={"/"}>
              <Image src={NextFarmLogo} alt="" className="h-10 w-36" />
            </Link>
            <Link href={"/trade"}>
              <h1>Trade</h1>
            </Link>
            <Link href={"/farm"}>
              <h1>Farm</h1>
            </Link>
            <h1>Earn</h1>
            <h1>...</h1>
          </div>
          <div className="flex items-center">
            <h1>Connect Wallet</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
