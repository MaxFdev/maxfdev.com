"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Contact from "@/components/elements/contact";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial state on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className="h-16 mb-8"
    >
      <nav
        className={`fixed z-10 top-0 w-full transition-all bg-white/60 backdrop-blur-lg h-16 px-[2vw] lg:px-12 flex justify-between items-center ${
          isScrolled ? "border-b border-b-blue-500/20 shadow-md" : ""
        }`}
      >
        <Link
          href="/#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h1 className="font-verdana text-blue-500 font-semibold text-3xl [text-shadow:_1px_1px_0px_#000000ab]">
            Max Franklin
          </h1>
        </Link>
        {/* FIXME this isn't working here */}
        <Contact />
      </nav>
    </header>
  );
};

export default Header;
