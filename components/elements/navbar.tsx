"use client";

import React, { useEffect, useState } from "react";

const Navbar = ({ children }: { children: React.ReactNode }) => {
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
    <nav
      className={`fixed z-10 top-0 w-full transition-all bg-white/60 backdrop-blur-lg h-16 px-[2vw] lg:px-12 flex justify-between items-center ${
        isScrolled ? "border-b border-b-blue-500/20 shadow-md" : ""
      }`}
    >
      {children}
    </nav>
  );
};

export default Navbar;
