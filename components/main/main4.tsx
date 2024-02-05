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
      <div>
        <Sub2 />
      </div>
    </div>
  );
};
export default main4;
