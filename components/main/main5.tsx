import { NextPage } from "next";
import rectangle from "../../public/images/rectangle.png";
import nexth from "../../public/images/nexth.png";
import Image from "next/image";
import Sub1 from "./sub/sub1";
import Sub2 from "./sub/sub2";
import Sub3 from "./sub/sub3";

const main4: NextPage = () => {
  return (
    <div className="bg-fuchsia-900 h-full w-full flex flex-col justify-center items-center">
      <div className="text-8xl text-pink-800 flex flex-col items-center">
        <div>V1농장이 출시되었습니다!</div>
        <div>자신만의 농장을 소유하고</div>
        <div>농작물을 재배하세요!</div>
      </div>
      <Image src={nexth} alt="nexth" width={200} height={200} />
    </div>
  );
};
export default main4;
