import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byte Guards",
  creator: "Jacques Twizeyimana",
  icons: "/images/logo.png",
  description:
    "Byte Guards is a community of developers who are passionate about learning and sharing their knowledge with others.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <section className="main min-h-screen flex flex-col">
          <Navbar />
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
