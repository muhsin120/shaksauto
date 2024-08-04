"use client";
import LogoSvg from "../../../public/svg/cardetailsvg.svg";
import Menu from "../../../public/svg/menu.svg";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { ButtonAnimation } from "../../components/ButtonAnimation";
const header = [
  {
    name: "Home",
    link: "/",
  },
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
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="w-full bg-red-700 sticky top-0 z-[1000] px-[1.62rem] py-[0.35rem] md:px-[7rem] md:py-[0.5rem]">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-title-large font-poppins text-white font-bold hidden md:block "
          >
            Shaks Auto Detailing
          </Link>
          <Link
            prefetch={false}
            className="pr-[4rem] text-white xs:pr-[5rem] md:pr-0"
            href="/"
          >
            <LogoSvg className=" h-[3rem] w-[8.8rem] pr-[4rem] pt-[0.22rem] md:h-[1.8rem] md:w-[10rem] md:pr-0 md:pt-0 lg:h-[4rem] lg:w-[6rem]" />
          </Link>
          {!open && (
            <Menu onClick={toggle} className="block md:hidden size-[1.8rem]" />
          )}
          <div className="md:flex gap-[3rem] text-white hidden ">
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
      {open && (
        <div className="fixed inset-0  z-[1000] grid grid-cols-4">
          <div onClick={toggle} className="bg-transparent col-span-2"></div>
          <div className="col-span-2 bg-darkOrange md:hidden gap-[1.5rem] text-white flex flex-col text-center pt-[5rem] ">
            {header.map((item, i) => (
              <Link key={i} prefetch={false} href={item.link}>
                <ButtonAnimation onClick={toggle} className="hover:text-darkBlue  font-poppins text-body-large font-medium  hover:text-BlueColor md:block md:py-[0.3rem] lg:py-[0.4rem]">
                  {item.name}
                </ButtonAnimation>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
