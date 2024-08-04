import Image from "next/image";

import EnvelopeSolid from "../../../public/svg/email.svg";
import LocationDotSolid from "../../../public/svg/address.svg";
import PhoneSolid from "../../../public/svg/phone.svg";
import BgImage from "../../../public/images/wash2.jpg";

const page = () => {
  return (
    <div className="relative z-[10rem] flex h-[90vh] items-center justify-center">
      <Image src={BgImage} alt="Bg-Image" fill className="object-cover" />
      <div className="from-1% to-99% absolute inset-0  z-[1] bg-gradient-to-t from-[#000000] to-transparent opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center gap-[2.25rem] text-left">
        <h2 className="~text-case-study-title/display-hero text-darkOrange font-poppins font-bold ">Contact Us</h2>
        <div className="text-global-font-tab-text2 text-white text-center">
          {/* <p>
          Visit us today and experience the difference.
          </p> */}
        </div>
        <div className="flex flex-col  md:flex-row md:items-center justify-center ~gap-[1.5rem]/[2rem] border-2 bg-white ~p-[1.2rem]/[2.5rem] rounded-xl">
          <div className="flex items-center md:justify-center gap-[1rem]">
            <div className="flex  items-center justify-center rounded-full bg-white">
              <EnvelopeSolid className="size-[1.5rem]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full">
              <h2 className="text-title-medium font-poppins text-darkBlue font-bold">ADDRESS</h2>
              <h2 className="text-title-small font-poppins"> Canada</h2>
            </div>
          </div>
          <div className="flex items-center md:justify-center gap-[1rem]">
            <div className="flex  items-center justify-center rounded-full bg-white">
              <PhoneSolid className="size-[1.5rem]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full ">
              <h2 className="text-title-medium font-poppins  text-darkBlue font-bold">CALL</h2>
              <h2 className="text-title-small font-poppins"> +971 000000</h2>
            </div>
          </div>
          <div className="flex items-center md:justify-center gap-[1rem]">
            <div className="flex  items-center justify-center rounded-full bg-white">
              <LocationDotSolid className="size-[1.5rem]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full" >
              <h2 className="text-title-medium font-poppins text-darkBlue font-bold">EMAIL</h2>
              <h2 className="text-title-small font-poppins"> shaksautodetailing@gmail.com</h2>
            </div>
          </div>
        </div>
        {/* <button className=" hover:bg-blue-900 w-fit rounded-xl bg-blue-600 px-[2.5rem] py-[0.9rem] text-global-font-tab-text2 font-bold text-white">
                    CONTACT US
                </button> */}
      </div>
    </div>
  );
};

export default page;
