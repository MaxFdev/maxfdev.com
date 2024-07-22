import React from "react";
import Navlist from "./navlist";
import Link from "next/link";

// TODO make nav styling change on scroll (scrolling effect)
// TODO make nav not change the url (just scroll on click)

const header = () => {
  return (
    <header
      id="header"
      className="fixed z-50 bg-white top-0 left-0 w-full h-16 px-[2vw] lg:px-12 flex justify-between items-center border-b border-b-blue-500/50 shadow-md"
    >
      <Link href="/#main">
        <h1 className="font-verdana text-blue-500 font-semibold text-3xl [text-shadow:_1px_1px_0px_#000000ab]">
          Max Franklin
        </h1>
      </Link>
      <Navlist />
    </header>
  );
};

export default header;
