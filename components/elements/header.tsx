"use client";

import React from "react";
import Link from "next/link";
import Contact from "@/components/elements/contact";

// TODO make slightly transparent with blur

const header = () => {
  return (
    <header
      id="header"
      className="h-[88px] mb-8"
    >
      <nav className="fixed z-10 top-0 w-full border-b border-b-blue-500/50 shadow-md">
        <p className="bg-black text-white text-center">
          WIP: I am in the process of overhauling parts of the site.
        </p>
        <div className="bg-white h-16 px-[2vw] lg:px-12 flex justify-between items-center">
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
          <Contact />
        </div>
      </nav>
    </header>
  );
};

export default header;
