import Image from "next/image";
import React from "react";
import BgImage from "../../../public/images/carBg.jpg";
import { ButtonAnimation } from "@/components/ButtonAnimation";
import Link from "next/link";
const SectionOne = () => {
  return (
    <div className="relative flex justify-center items-center h-[85dvh] w-full">
      <Image
        src={BgImage}
        alt=""
        className=" h-full w-full object-cover"
        fill
      />
      <div className="flex flex-col font-poppins justify-center items-center z-10  text-gray-50">
        <div className="text-[#f72] ~text-title-medium/label-footer font-bold">
          Car Washing & Detailing
        </div>
        <div className="~text-headline-large/display-medium text-center py-[1rem] font-bold">Keep Your Car Newer</div>
        <div className="~text-body-medium/small-screen ">
          We provide top-notch car detailing services
        </div>
        <Link href="tel:+19099009439" >
          <ButtonAnimation className=" rounded-2xl bg-darkOrange mt-[1.5rem] hover:bg-white">
            <div className="py-[0.5rem] px-[1rem] text-body-medium text-white font-bold hover:text-darkOrange">
              Book Now
            </div>
          </ButtonAnimation>
        </Link>
      </div>
    </div>
  );
};

export default SectionOne;
