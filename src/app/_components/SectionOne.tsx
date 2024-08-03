import Image from "next/image";
import React from "react";
import BgImage from "../../../public/images/carBg.jpg";
import { ButtonAnimation } from "@/components/ButtonAnimation";
const SectionOne = () => {
  return (
    <div className="relative flex justify-center items-center h-[85vh] w-full">
      <Image
        src={BgImage}
        alt=""
        className=" h-full w-full object-cover"
        fill
      />
      <div className="flex flex-col font-poppins justify-center items-center z-10  text-gray-50">
        <div className="text-[#f72] text-label-footer font-bold">
          Car Washing & Detailing
        </div>
        <div className="text-5xl py-[1rem] font-bold">Keep Your Car Newer</div>
        <div className="text-lg ">
          We provide top-notch car detailing services
        </div>
        <ButtonAnimation className=" rounded-2xl bg-darkOrange mt-[1.5rem] hover:bg-darkBlue">
          <div className="py-[0.5rem] px-[1rem] text-darkBlue font-bold hover:text-darkOrange">
            Book Now
          </div>
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default SectionOne;
