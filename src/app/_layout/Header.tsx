import LogoSvg from "../../../public/svg/cardetailsvg.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ButtonAnimation } from "../../components/ButtonAnimation";
const header = [
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
const Header = () => {
  return (
    <div className="w-full bg-[#f46813] sticky top-0 z-[1000] px-[1.62rem] py-[0.35rem] md:px-[7rem] md:py-[0.5rem]">
      <div className="flex items-center justify-between">

        <Link href="/" className="text-title-large font-poppins text-white font-bold ">
          Shaks Auto Detailing
        </Link>
        <Link
          prefetch={false}
          className="pr-[4rem] text-darkBlue xs:pr-[5rem] md:pr-0"
          href="/"
        >
          <LogoSvg className=" h-[1.5rem] w-[8.8rem] pr-[4rem] pt-[0.22rem] md:h-[1.8rem] md:w-[10rem] md:pr-0 md:pt-0 lg:h-[4rem] lg:w-[6rem]" />
        </Link>

        <div className="flex gap-[3rem] text-white ">
          {header.map((item, i) => (
            <Link key={i} prefetch={false} href={item.link}>
              <ButtonAnimation className="hover:text-darkBlue  font-poppins text-body-large font-medium  hover:text-BlueColor md:block md:py-[0.3rem] lg:py-[0.4rem]">
                {item.name}
              </ButtonAnimation>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
