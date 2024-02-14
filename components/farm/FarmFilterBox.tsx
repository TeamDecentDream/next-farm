import { FC } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

const FarmFilterBox: FC = () => {
  return (
    <>
      <div className="w-[800px] h-20 bg-[#2F2B2B] rounded-2xl mx-auto flex px-10 pt-3">
        <div>
          <h1>Filter By</h1>
          <div className="rounded-full bg-[#96AA47]">
            <button className="rounded-full bg-[#537e26] px-4 h-7 font-semibold">
              Live
            </button>
            <button className="rounded-full px-4 font-semibold">
              Finished
            </button>
          </div>
        </div>
        <div className="ml-auto mr-20">
          <h1>Sort By</h1>
          <button className="rounded-full bg-[#96AA47] px-4 h-7 flex items-center gap-1">
            Hot <BiSolidDownArrow />
          </button>
        </div>
        <div>
          <h1>Search</h1>
          <input className="rounded-full bg-[#96AA47] px-4 w-40 h-7"></input>
        </div>
      </div>
    </>
  );
};

export default FarmFilterBox;
