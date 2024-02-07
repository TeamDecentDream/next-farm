import { NextPage } from "next";

interface HomeLast30daysProps {
  title: string;
  amount: string;
}

const HomeLast30days: NextPage<HomeLast30daysProps> = ({ title, amount }) => {
  return (
    <>
      <div className="flex flex-col text-center gap-5 font-semibold">
        <h1 className="text-2xl">{title}</h1>
        <h1 className="text-6xl text-[#73FFE6]">{amount}</h1>
        <h1 className="text-2xl">In the last 30 days</h1>
      </div>
    </>
  );
};

export default HomeLast30days;
