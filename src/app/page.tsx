// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import SectionOne from "./_components/SectionOne";
import Choose from "../../public/images/sectionOnebg.jpg";
import Service from "./_components/Service";
import { ButtonAnimation } from "@/components/ButtonAnimation";
const datas = [
  {
    type: "Bronze",
    price: 50,
    points: [
      { point: "Vacuum & Dust Interior" },
      { point: "Clean Windows" },
      { point: "Air freshner (optional) " },
      { point: "Remove all garbages" },
    ],
  },
  {
    type: "Gold",
    price: 70,
    points: [
      { point: "Everything on Bronze package" },
      { point: "Floor & carpet shampoo" },
      { point: "Steam cleaning air vents" },
      // { point: "Vacuum & Dust Interior" },
    ],
  },
];
export default function Home() {
  return (
    <div className="">
      <SectionOne />
      <div className="~px-[2rem]/[10rem] ~py-[2.5rem]/[3rem]">
        <div className="text-center ~text-headline-medium/display-small text-darkBlue font-poppins font-bold">
          Why choose us
        </div>
        <div className="flex flex-col md:flex-row ~py-[2rem]/[3rem] gap-[1rem] w-full">
          <div className="~text-label-medium/label-footer font-poppins md:w-[60%]">
            <p>
              At Shaks Auto Detailing, we believe in providing more than just a
              clean car – we deliver an exceptional experience that leaves your
              vehicle looking and feeling brand new. Our team is passionate
              about cars and dedicated to perfection. With years of experience,
              we ensure your car gets the best care possible.
            </p>
            <p className="pt-[1rem]">
              We offer a comprehensive range of services, from deep-cleaning
              interiors to polishing exteriors, covering every aspect of
              detailing to meet your unique needs. Using only top-quality,
              eco-friendly products and the latest techniques, we achieve
              stunning results without harming your vehicle or the environment.
            </p>
            <div className="md:flex justify-center hidden pt-[2rem]">
              <Link href='/about'>
                <ButtonAnimation className="rounded-2xl bg-darkOrange hover:bg-white ">
                  <p className="text-white hover:text-darkOrange font-bold px-[1rem] py-[0.8rem]">
                    Know more {">>"}
                  </p>
                </ButtonAnimation>
              </Link>
            </div>
          </div>
          <Image src={Choose} alt="" className="rounded-2xl md:w-[40%]" />
          <div className="flex justify-center md:hidden ~pt-[1rem]/[2rem]">
              <Link href='/about'>
                <ButtonAnimation className="rounded-2xl bg-darkOrange hover:bg-white ">
                  <p className="text-white text-body-medium hover:text-darkOrange font-bold px-[1rem] py-[0.8rem]">
                    Know more {">>"}
                  </p>
                </ButtonAnimation>
              </Link>
            </div>
        </div>
      </div>
      <div className="~pb-[2rem]/[3rem] ~pt-0/[3rem]">
        <div className="text-center ~text-headline-medium/display-small text-darkBlue font-poppins font-bold">
          Some of our services
        </div>
        <div className="flex flex-col items-center md:flex-row gap-[3rem] justify-center ~pt-[2.5rem]/[3rem]">
          {datas.map((item, i) => (
            <Service
              key={i}
              points={item.points}
              type={item.type}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex justify-center  py-[2rem]">
          <Link href='/services'>
            <ButtonAnimation className="rounded-2xl bg-darkOrange hover:bg-white ">
              <p className="text-white text-body-medium font-poppins hover:text-darkOrange font-bold ~px-[1.5rem]/[2rem] ~py-[0.6rem]/[0.8rem]">
                Explore All {">>"}
              </p>
            </ButtonAnimation>
          </Link>
        </div>
      </div>
    </div>
  );
}
