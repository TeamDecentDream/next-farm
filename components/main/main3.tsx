import { NextPage } from "next";
import rectangle from "../../public/images/rectangle.png";
import nexth from "../../public/images/nexth.png";
import Image from "next/image";
import Sub1 from "./sub/sub1";
import Sub2 from "./sub/sub2";
import Sub3 from "./sub/sub3";

const main3: NextPage = () => {
  return (
    <div className="bg-fuchsia-900 h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        <div>
          <Image src={nexth} alt="nexth" width={200} height={200} />
        </div>
        <div className="flex flex-col pl-[50px]">
          <div className="text-8xl">NEXT FARM</div>
          <div className="text-8xl">MY DETAIL’S</div>
        </div>
      </div>
      <div>
        <Sub1 />
      </div>
    </div>
  );
};
export default main3;
