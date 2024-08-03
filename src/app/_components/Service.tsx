import Image from "next/image";
import White from "../../../public/svg/whiteCircle.svg";
import Check from "../../../public/svg/checkCircle.svg";
import { ButtonAnimation } from "@/components/ButtonAnimation";
const data = [
  {
    type: "Basic",
    price: 99,
    points: [
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
    ],
  },
  {
    type: "Basic",
    price: 99,
    points: [
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
    ],
  },
  {
    type: "Basic",
    price: 99,
    points: [
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
      { point: "Vacuum & Dust Interior" },
    ],
  },
];
type Props = {
  type: string;
  price: number;
  points: any;
};
const Service = ({ type, price, points }: Props) => {
  return (
    <div className="pt-[2.5rem] relative ~pb-[1.5rem]/[3rem] ~px-[2.4rem]/[2.688rem] group rounded-3xl shadow-xl ~w-[19rem]/[22rem] hover:scale-105 transition-all duration-500 bg-white hover:bg-darkOrange">
      <div className=" text-center text-display-hero font-bold font-poppins text-darkOrange group-hover:text-white">
        {type}
      </div>
      <div className="py-[1rem]">
        <h2 className="text-display-medium font-bold font-poppins text-darkBlue  font-CircularBold">
          $ {price}
        </h2>
        <h3 className="text-title-medium font-poppins font-medium pt-[0.5rem] text-darkBlue font-CircularBold group-hover:text-white">
          Whats included
        </h3>
        <div className="flex flex-col gap-[1rem] pt-[1.5rem]">
          {points?.map((item: any, i: any) => (
            <div key={i} className="flex items-center gap-[0.875rem]">
              <Check className="size-[1.2rem] block " />
              {/* <White className="size-[1.2rem] hidden group-hover:block" /> */}
              <h2 className="text-title-small font-poppins font-medium text-darkBlue font-Circular450 group-hover:text-white">
                Vacuum & Dust Interior
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-[1rem]">
        <ButtonAnimation className="rounded-2xl bg-darkOrange group-hover:bg-white ">
          <p className="px-[1rem] py-[0.5rem] text-darkBlue group-hover:text-darkBlue font-poppins font-bold">
            Book Now
          </p>
        </ButtonAnimation>
      </div>
    </div>
  );
};

export default Service;
