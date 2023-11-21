import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const voodoo = localFont({
  src: "assets/voodoo-sans.ttf",
  display: "auto",
  variable: "--font-title",
});

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Geco",
  description: "A green product selling website",
  appleWebApp: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${voodoo.variable} ${sans.variable} font-sans`}>
        <Header />
        <main className="pt-24 px-8 lg:px-32 h-[100svh]">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
