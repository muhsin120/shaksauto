// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import SectionOne from "./_components/SectionOne";

export default function Home() {
  return (
    <div className="">
      <SectionOne/>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8 text-teal-400">
          Gallery
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <Image
              src="/images/before1.jpeg"
              alt="Before detailing"
              className="w-full h-auto rounded-lg"
              fill
            />
            <Image
              src="/images/after1.jpeg"
              alt="After detailing"
              className="w-full h-auto rounded-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              fill
            />
          </div>
          <div className="relative">
            <Image
              src="/images/before2.jpeg"
              alt="Before detailing"
              className="w-full h-auto rounded-lg"
              fill
            />
            <Image
              src="/images/after2.jpeg"
              alt="After detailing"
              className="w-full h-auto rounded-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              fill
            />
          </div>
          <div className="relative">
            <Image
              src="/images/before3.jpeg"
              alt="Before detailing"
              className="w-full h-auto rounded-lg"
              fill
            />
            <Image
              src="/images/after3.jpeg"
              alt="After detailing"
              className="w-full h-auto rounded-lg absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
              fill
            />
          </div>
        </div>
      </section>

      <section className="text-center mb-12">
        <Link
          href="/services"
          className="text-2xl text-teal-400 hover:underline"
        >
          Check Out Our Services
        </Link>
      </section>

      <section id="contact">{/* Contact section or link */}</section>
    </div>
  );
}
