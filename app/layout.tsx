import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Apne components ko import karein
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divine Bricks | Find your place in Dubai",
  description:
    "Explore homes for sale and rent across Dubai with Divine Bricks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col w-full overflow-x-hidden bg-white text-gray-900">
        
        {/* 2. NAVBAR KO STICKY BANANE KE LIYE WRAPPER */}
        {/* sticky: scroll par chipka rahega */}
        {/* top-0: bilkul top par */}
        {/* z-50: baaki content ke upar dikhe */}
        <div className="sticky top-0 z-50 w-full">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        
      </body>
    </html>
  );
}