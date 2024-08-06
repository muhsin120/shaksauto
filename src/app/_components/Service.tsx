import Image from "next/image";
import White from "../../../public/svg/whiteCircle.svg";
import Check from "../../../public/svg/checkCircle.svg";
import { ButtonAnimation } from "@/components/ButtonAnimation";
import Link from "next/link";

type Props = {
  type: string;
  price: number;
  points: any;
};
const Service = ({ type, price, points }: Props) => {
  return (
    <div className="~pt-[1.5rem]/[2.5rem] relative ~pb-[1.5rem]/[3rem] ~px-[2.4rem]/[2.688rem] group rounded-3xl shadow-2xl ~w-[17rem]/[22rem] hover:scale-105 transition-all duration-500 bg-white hover:bg-[#f46813]">
      <div className=" text-center ~text-headline-medium/display-hero font-bold font-poppins text-[#f46813] group-hover:text-white">
        {type}
      </div>
      <div className="~pt-[1rem]/[1.5rem] ~pb-[3rem]/[2.5rem]">
        <h2 className="~text-headline-large/display-medium font-bold font-poppins text-darkBlue  font-CircularBold">
          $ {price}
        </h2>
        <h3 className="~text-title-small/title-medium font-poppins font-medium pt-[0.5rem] text-darkBlue font-CircularBold group-hover:text-white">
          Whats included
        </h3>
        <div className="flex flex-col gap-[1rem] pt-[1.5rem]">
          {points?.map((item: any, i: any) => (
            <div key={i} className="flex items-center gap-[0.875rem]">
              <Check className="~size-[1rem]/[1.2rem] block " />
              {/* <White className="size-[1.2rem] hidden group-hover:block" /> */}
              <h2 className="~text-body-small/title-small font-poppins font-medium text-darkBlue font-Circular450 group-hover:text-white">
                {item.point}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 inset-x-0 flex justify-center ">
        <Link href="tel:+19029009432">
          <ButtonAnimation className="rounded-2xl bg-[#f46813] group-hover:bg-white ">
            <p className="px-[1rem] py-[0.5rem] text-body-medium text-white group-hover:text-darkBlue font-poppins font-bold">
              Book Now
            </p>
          </ButtonAnimation>
        </Link>
      </div>
    </div>
  );
};

export default Service;
