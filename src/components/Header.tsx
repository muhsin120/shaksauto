// src/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-gray-800 text-gray-200 py-[1.5rem] px-[4rem]">
      <div className=" flex  justify-between items-center">
        <Link href="/" className=" font-poppins text-2xl font-bold text-teal-400">
          Shaks Auto Detailing
        </Link>
        <div className="font-poppins">
          <Link href="/" className="mx-4 hover:text-teal-400">
            Home
          </Link>
          <Link href="/services" className="mx-4 hover:text-teal-400">
            Services
          </Link>
          <Link href="/contact" className="mx-4 hover:text-teal-400">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
