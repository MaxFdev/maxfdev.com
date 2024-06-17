import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/elements/header";
import Body from "@/components/elements/body";
import Footer from "@/components/elements/footer";

export const metadata: Metadata = {
  title: "Max Franklin",
  description: "Max's portfolio website.",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

// TODO is the custom body tag needed?

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="no-scrollbar"
    >
      <Body className={`${notoSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </Body>
    </html>
  );
}
