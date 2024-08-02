import Image from "next/image";
import React from "react";
import BgImage from "../../../public/images/bg1.png";
const SectionOne = () => {
  return (
    <div className="relative flex justify-center items-center h-[80vh] w-full">
      <Image
        src={BgImage}
        alt=""
        className=" h-full w-full object-cover"
        fill
      />
      <div className="flex flex-col font-poppins justify-center items-center z-10 text-gray-50">
        <div className="text-red-700">
            Car Washing & Detailing
        </div>
        <div className="text-5xl py-[1rem] font-bold">Keep Your Car Newer</div>
        <div className="text-lg ">
          We provide top-notch car detailing services 
        </div>
        <button className=" rounded-2xl bg-red-700 mt-[1.5rem] hover:bg-white">
            <div className="py-[0.5rem] px-[1rem] font-medium hover:text-red-700">Book Now</div>
        </button>
      </div>
      {/* <div className=" col-span-1  ">
        <p className="text-lg">
          At Shaks Auto Detailing, we pride ourselves on delivering exceptional
          quality and service. Our experienced team uses the best products and
          techniques to ensure your car receives the care it deserves.
        </p>
      </div> */}
    </div>
  );
};

export default SectionOne;
