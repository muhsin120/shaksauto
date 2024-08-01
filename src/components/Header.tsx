// src/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-400">
          Shaks Auto Detailing
        </Link>
        <nav>
          <Link href="/" className="mx-4 hover:text-teal-400">
            Home
          </Link>
          <Link href="/services" className="mx-4 hover:text-teal-400">
            Services
          </Link>
          <Link href="/contact" className="mx-4 hover:text-teal-400">
            Contact
          </Link>
          {/* <a
            href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 hover:text-teal-400"
          >
            Instagram
          </a> */}
        </nav>
      </div>
    </header>
  );
}
