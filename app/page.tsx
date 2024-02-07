import HomeLast30days from "@/components/home/HomeLast30days";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="max-w-screen bg-[#2D1737] pt-20">
        <div className="w-1/2 mx-auto">
          <h1 className="text-5xl font-bold leading-relaxed">
            넥스트팜이 새로운 농업의 <br />
            시대를 열겠습니다
          </h1>
          <h1 className="font-medium mt-10">
            양파 대파 버섯 등 <br /> 모든 작물에 투자할 수 있습니다.
          </h1>
          <div className="mt-10">
            <button className="mr-5 rounded-full bg-[#692F84] p-3 text-2xl font-semibold">
              Connect Wallet
            </button>
            <button className="rounded-full bg-[#692F84] p-3 text-2xl font-semibold">
              Trade Now
            </button>
          </div>
        </div>
        <div className="max-w-screen h-1/2 rounded-t-[80px] bg-[#692F84] mt-40 pb-96">
          <div className="w-1/2 mx-auto pt-20">
            <h1 className="text-center text-4xl font-bold leading-relaxed">
              농업 디파이 생태계를 선도하는 NEXT FARM의 <br /> 새로운 기능들을
              직접 써보세요
            </h1>
            <div className="flex justify-between mt-40">
              <HomeLast30days title="Total Users" amount="1,213,244" />
              <HomeLast30days title="Total Traders" amount="213,244" />
              <HomeLast30days title="Total Value Locked" amount="$1,213,244" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
