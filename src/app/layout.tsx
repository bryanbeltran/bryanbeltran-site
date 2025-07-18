import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Bryan Beltran",
  description:
    "Portfolio and writing by Bryan Beltran — software developer focused on purposeful tools and thoughtful engineering.",
  metadataBase: new URL("https://bryanbeltran.us"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bryan Beltran",
    description:
      "Portfolio and writing by Bryan Beltran — software developer focused on purposeful tools and thoughtful engineering.",
    url: "https://bryanbeltran.us",
    siteName: "Bryan Beltran",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bryan Beltran",
    description:
      "Portfolio and writing by Bryan Beltran — software developer focused on purposeful tools and thoughtful engineering.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground">
        <Navbar />
        <main className="max-w-4xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
