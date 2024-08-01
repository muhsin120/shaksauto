// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-4">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Welcome to Shaks Auto Detailing
      </h1>
      <section className="text-center mb-12">
        <p className="text-xl mb-6">
          We provide top-notch car detailing services to make your vehicle look
          brand new.
        </p>
        <p className="text-lg">
          At Shaks Auto Detailing, we pride ourselves on delivering exceptional
          quality and service. Our experienced team uses the best products and
          techniques to ensure your car receives the care it deserves.
        </p>
      </section>

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
