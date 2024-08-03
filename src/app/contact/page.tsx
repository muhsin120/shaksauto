import Image from "next/image";

import EnvelopeSolid from "../../../public/svg/email.svg";
import LocationDotSolid from "../../../public/svg/address.svg";
import PhoneSolid from "../../../public/svg/phone.svg";
import BgImage from "../../../public/images/contactBg.jpg";

const page = () => {
  return (
    <div className="relative z-[10rem] flex h-[90vh] items-center justify-center">
      <Image src={BgImage} alt="Bg-Image" fill className="object-cover" />
      <div className="from-1% to-99% absolute inset-0  z-[1] bg-gradient-to-t from-[#000000ba] to-transparent opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center gap-[2.25rem] text-left">
        <h2 className="text-global-font-h7 font-bold text-white">CONTACT US</h2>
        <div className="text-global-font-tab-text2 text-white text-center">
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          <p>
            Newtonian mechanics resolve the conflict between the two major
            realms of Classical physics
          </p>
        </div>
        <div className="flex items-center justify-center gap-[2rem]  bg-gradient-to-b from-slate-50/65 border-2 to-cyan-200/55 p-10 rounded-xl">
          <div className="flex items-center justify-center gap-[0.5rem]">
            <div className="flex size-[2.5rem] items-center justify-center rounded-full bg-white">
              <EnvelopeSolid className="size-[1.5rem]" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-global-font-mob-h2 font-bold">ADDRESS</h2>
              <h2>1908, 19th Floor, Prism Tower, Business Bay</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[0.5rem]">
            <div className="flex size-[2.5rem] items-center justify-center rounded-full bg-white">
              <PhoneSolid className="size-[1.5rem]" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-global-font-mob-h2 font-bold">CALL</h2>
              <h2> +971 562315481</h2>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[0.5rem]">
            <div className="flex size-[2.5rem] items-center justify-center rounded-full bg-white">
              <LocationDotSolid className="size-[1.5rem]" />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-global-font-mob-h2 font-bold">EMAIL</h2>
              <h2> Thania@ecommerce.com</h2>
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
