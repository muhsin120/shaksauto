import Link from "next/link";

const LowerFooter = () => {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <div className=" bg-darkOrange py-[0.62rem]">
        <h2 className="text-center font-poppins text-body-small text-darkBlue md:text-desktop-body">
          © 2024 Shak&apos;s Auto Detailing. | Crafted by{" "}
          <Link
            className="font-semibold"
            target="_blank"
            href={"https://www.instagram.com/__muhsin_bin_musthafa?igsh=M3hpZGl1dWFvN2M3"}
          >
            Muhsin
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default LowerFooter;
