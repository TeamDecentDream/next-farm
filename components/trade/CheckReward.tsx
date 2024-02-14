import { FC } from "react";

const CheckReward: FC = () => {
  const data = [
    { key: "Starts", value: "On Jan 25, 2024, 09:00" },
    { key: "Ends", value: "In 24d 21h 47m" },
    { key: "My Deposit", value: "0" },
    { key: "Rewarding", value: "70% of RealWorldFarming Reward" },
    { key: "Total volume generaterd", value: "$301,718,120,691" },
  ];

  return (
    <>
      <div className="flex w-[1000px] mx-auto flex-col">
        <h1 className="text-[#DFE232] text-center text-5xl font-bold mt-20">
          Your Farming Reward
        </h1>
        <div className="w-[800px] h-[250px] bg-[#DED689] rounded-2xl p-14 mt-20 mx-auto">
          <h1 className="text-center text-black font-bold text-xl">
            Connect wallet to view your trading volume and rewards
          </h1>
          <div className="flex w-full justify-center mt-16">
            <button className="w-48 h-14 bg-[#5AE0B0] rounded-xl text-black font-bold text-xl">
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="w-[800px] h-[450px] bg-[#2F2B2B] rounded-2xl p-10 mt-10 mx-auto">
          <h1 className="text-center text-[#DFE232] font-bold text-4xl">
            Current Reward Pool
          </h1>
          <div className="flex flex-col items-center mt-10">
            <div className="w-[300px] h-10 bg-[#949E57] rounded-t-xl flex justify-center items-center">
              <h1 className="text-[#532121] font-bold text-xl">
                한경면 낙천리 배추 V3
              </h1>
            </div>
            <div className="w-[600px] h-[250px] bg-[#949E57] rounded-2xl px-10 pt-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-1"
                >
                  <h1 className="text-white font-semibold text-xl">
                    {item.key}
                  </h1>
                  <h1 className="text-white font-semibold text-xl">
                    {item.value}
                  </h1>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <h1 className="text-white font-semibold text-xl">
                  Number of eligible pairs
                </h1>
                <div className="flex items-center gap-4">
                  <h1 className="text-white font-semibold text-xl">3</h1>
                  <button className="text-black font-bold text-lg bg-[#DF9C38] rounded-full w-30 h-10 px-5">
                    View Pairs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckReward;
