import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";

const font = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Bryan Beltran",
  description: "Software developer portfolio and blog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${font.className} bg-background text-foreground`}>
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
