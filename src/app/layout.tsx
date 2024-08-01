// src/app/layout.tsx
import Link from 'next/link';
import '../styles/globals.css'; // Ensure global styles are imported
import '../app/component/Header';
import '../app/component/Footer';
import Footer from '../app/component/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <body>
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
            </nav>
          </div>
        </header>
        <main className="flex-grow">{children}</main>
        <Footer/> {/* Add the Footer here */}
      </body>
    </html>
  );
}

