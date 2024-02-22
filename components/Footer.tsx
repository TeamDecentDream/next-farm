import Image from "next/image";
import { FC } from "react";
import FooterLogo from "/public/images/FooterLogo.png";

const Footer: FC = () => {
  return (
    <>
      <div className="max-w-screen bg-[#E8FFCF] h-[100px] p-10 flex items-end">
        <Image src={FooterLogo} alt="Logo" className="w-40" />
      </div>
    </>
  );
};

export default Footer;
