import Image from "next/image";
import React from "react";
import AboutBg from "../../../public/images/interior1.jpg";
import Pic1 from "../../../public/images/contactBg.jpg";
import Pic2 from "../../../public/images/sectionOnebg.jpg";

const page = () => {
  return (
    <div className="">
      <div className="w-full h-[55dvh] md:h-[70dvh] relative flex justify-center items-center">
        <Image src={AboutBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute  ~text-headline-large/display-medium font-poppins font-bold text-white">
          About Us
        </div>
      </div>
      <div className="~py-[4rem]/[5rem] ~px-[1.5rem]/[10rem]">
        <div className="~text-headline-medium/display-hero font-poppins font-bold ~pb-[1.5rem]/[2rem] text-darkBlue">
        Who We Are
        </div>
        <div className="~text-label-medium/label-footer font-poppins flex flex-col ~gap-[0.5rem]/[1rem]">
          <p>
            Welcome to Shaks Auto Detailing! Were passionate about bringing your
            car back to its prime condition with our expert detailing services.
            Located in the heart of Novascotia, we take pride in transforming your
            vehicle into a spotless, fresh, and immaculate ride. Our passion for
            perfection drives us to provide top-notch cleaning and detailing
            that goes beyond just the surface. We understand that every car has
            its unique needs, and we’re here to meet them with precision and
            care. Using the best products and latest techniques, we ensure that
            your car looks and feels as good as new.
          </p>
          <p>
            At Shaks Auto Detailing, we offer a range of comprehensive services
            to give your car the ultimate care it deserves. From deep-cleaning
            the interiors to polishing the exteriors, we handle every aspect of
            detailing with meticulous attention to detail. Our team of
            experienced professionals is dedicated to delivering superior
            results that enhance the look and feel of your vehicle. Customer
            satisfaction is our top priority. We tailor our services to fit your
            specific requirements, guaranteeing a personalized touch that sets
            us apart. Whether it’s a routine clean-up or a thorough detailing
            job, Shaks Auto Detailing is committed to delivering exceptional
            results every time.
          </p>
          Our commitment to excellence and our love for cars drive us to go the
          extra mile for our customers. We believe that a well-maintained car
          not only looks great but also adds to the joy of driving. Thats why we
          strive to provide an outstanding detailing experience that leaves you
          completely satisfied.   
        </div>
        <div className="grid md:grid-cols-2 ~gap-[1rem]/[2rem] ~py-[1rem]/[2rem]">
          <Image src={Pic1} alt="" className="rounded-2xl "/>
          <Image src={Pic2} alt="" className="rounded-2xl"/>
        </div>
        {/* Were excited to help your car shine like never before! Visit us today
          and experience the difference. */}
      </div>
    </div>
  );
};

export default page;
