import { NextComponentType } from "next";
import { BiSolidDownArrow } from "react-icons/bi";

const FarmFilterBox: NextComponentType = () => {
  return (
    <>
      <div className="w-1/2 h-20 bg-[#692F84] rounded-2xl mx-auto flex px-10 pt-3">
        <div>
          <h1>Filter By</h1>
          <div className="rounded-full bg-[#4B1464]">
            <button className="rounded-full bg-[#B365D5] px-4 h-7">Live</button>
            <button className="rounded-full px-4 ">Finished</button>
          </div>
        </div>
        <div className="ml-auto mr-20">
          <h1>Sort By</h1>
          <button className="rounded-full bg-[#4B1464] px-4 h-7 flex items-center gap-1">
            Hot <BiSolidDownArrow />
          </button>
        </div>
        <div>
          <h1>Search</h1>
          <input className="rounded-full bg-[#4B1464] px-4 w-40 h-7"></input>
        </div>
      </div>
    </>
  );
};

export default FarmFilterBox;
