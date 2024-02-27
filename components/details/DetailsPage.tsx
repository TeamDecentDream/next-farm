"use client";

import Image from "next/image";
import Rectangle from "../../public/images/Rectangle.png";
import Navbar from "../Navbar";
import ImageWithText from "./ImageWithText";
import { FC } from "react";


const DetailsPage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col  pt-[100px]  items-center text-5xl text-[#5AC833] bg-[#E8FFCF]">
        <h1>NEXT FARM </h1>
        <h1 className="pt-10 pb-20">MY DETAIL'S</h1>
        <Image
          src={Rectangle}
          alt="Rectangle"
          className="h-[400px] w-[700px] ml-3 "
        />
        <div>
          <ImageWithText
            imageUrl="../../public/images/Rectangle.png"
            text="First Image Text"
          />
          <ImageWithText
            imageUrl="../../public/images/Rectangle.png"
            text="Second Image Text"
          />
          <ImageWithText
            imageUrl="../../public/images/Rectangle.png"
            text="Third Image Text"
          />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
