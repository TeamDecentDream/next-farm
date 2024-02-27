"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import NZFToken from "../public/images/NZFToken.png";
import NextFarmLogo from "/public/images/NextFarmLogo.png";

import { useAuth } from "./metamask/authContext";

const Navbar: FC = () => {
  const { isLoggedIn, login, account } = useAuth();
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
          <Link href="/trade">
            <button className="pl-5">Trade</button>
          </Link>
          <Link href="/farm">
            <button className="pl-5">Farm</button>
          </Link>
          <button className="pl-5">Earn</button>
          <h2>...</h2>
        </div>
        <div className="flex items-center gap-3 pr-5">
          <div className="flex items-center gap-3">
            {isLoggedIn && (
              <>
                <Image
                  src={NZFToken}
                  alt="NZFToken"
                  className="h-10 w-10 ml-3 "
                />
                <h2>$1.095</h2>
              </>
            )}
          </div>

          <button onClick={login}>{isLoggedIn ? account : "로그아웃됨"}</button>
        </div>
      </div>
      <div className="border-b border-gray-400"></div>
    </>
  );
};

export default Navbar;
