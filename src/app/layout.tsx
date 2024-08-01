import "../components/Header";
import "../components/Footer";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer /> {/* Add the Footer here */}
      </body>
    </html>
  );
}
