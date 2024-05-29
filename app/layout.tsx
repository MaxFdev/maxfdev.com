import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Max Franklin",
  description: "Max's portfolio website.",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
