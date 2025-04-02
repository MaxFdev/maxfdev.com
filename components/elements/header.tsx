import React from "react";
import Link from "next/link";
import Navlist from "@/components/elements/navlist";

// TODO make nav styling change on scroll (scrolling effect)
// TODO make nav not change the url (just scroll on click)
// TODO make slightly transparent with blur
// TODO add a gap to the top of the page so that content doesn't get hidden

const header = () => {
  return (
    <header
      id="header"
      className="fixed z-50 top-0 left-0 w-full border-b border-b-blue-500/50 shadow-md"
    >
      <p className="bg-black text-white text-center">
        WIP: Some parts may not be fully
        functional, and some info might be out of date.
      </p>
      <div className="bg-white h-16 px-[2vw] lg:px-12 flex justify-between items-center">
        <Link href="/#main">
          <h1 className="font-verdana text-blue-500 font-semibold text-3xl [text-shadow:_1px_1px_0px_#000000ab]">
            Max Franklin
          </h1>
        </Link>
        <Navlist />
      </div>
    </header>
  );
};

export default header;
