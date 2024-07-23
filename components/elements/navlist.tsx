import Link from "next/link";
import React from "react";
import Contact from "./contact";

// TODO mobile nav
// TODO switch this to a dynamic list of sections
// TODO make links on click scroll

const navlist = () => {
  return (
    <nav className="font-trebuchet text-blue-500 text-xl">
      <ul className="hidden md:flex flex-row justify-center items-center lg:gap-8 md:gap-6">
        <li>
          <Link href="/#hero">Intro</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#skills">Skills</Link>
        </li>
        <li>
          <Contact />
        </li>
      </ul>
      <button className="md:hidden">≡</button>
    </nav>
  );
};

export default navlist;
