import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Divine Bricks | Find your place in India",
  description:
    "Explore homes for sale and rent across India with Divine Bricks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-screen flex flex-col w-full bg-white text-gray-900">
        <Navbar />

        <main className="flex-1 w-full flex flex-col">{children}</main>

        <Footer/>
      </body>
    </html>
  );
}