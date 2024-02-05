"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import wifi from "../public/images/wifi.png";
import nexth from "../public/images/nexth.png";
import Main2 from "../components/main/main2";
import Main3 from "../components/main/main3";
import Main4 from "../components/main/main4";
import Main5 from "../components/main/main5";

export default function page() {
  return (
    <>
      <div className="bg-fuchsia-900 min-h-full w-full flex flex-row">
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row pl-[120px] pt-[150px]">
              <div className="text-7xl pt-[120px]  text-white">
                <div>넥스트팜이 새로운 농업의 </div>
                <div className="pt-10">시대를 열겠습니다</div>
              </div>
            </div>

            <div className="text-2xl pl-[120px] pt-[30px] text-white">
              <div>양파 대파 버섯 등</div>
              <div className="pt-7">모든작물에 투자할수 있습니다.</div>
            </div>
          </div>
          <div className="flex flex-row text-2xl pl-[120px] pt-[30px]">
            <div>
              <Button variant="secondary" className="hover:text-blue-600">
                Connet Wallet
              </Button>
            </div>
            <div className="pl-7 ">
              <Button variant="secondary" className="hover:text-blue-600">
                Trade Now
              </Button>
            </div>
            <div className="pl-[300px]">
              <Image src={nexth} alt="nexth" width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="pl-[150px] pt-[200px]">
          <Image src={wifi} alt="wifi" width={500} height={500} />
        </div>
      </div>
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Button
        variant="secondary"
        className="hover:text-blue-600 fixed top-20 left-10 first-letter:hover:bg-red-600"
      >
        지금당장 투자하기
      </Button>
    </>
  );
}
