import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/elements/header";
import Footer from "@/components/elements/footer";

export const metadata: Metadata = {
  title: "Max Franklin",
  description: "Max's portfolio website.",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

// TODO check that all files are in the right place
// TODO do some seo?
// TODO handle props correctly
// TODO grab data off of github

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
      <body className={`${notoSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
