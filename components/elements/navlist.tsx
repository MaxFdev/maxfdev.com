import React from "react";
import Link from "next/link";
import Contact from "@/components/elements/contact";
import MobileMenu from "./mobileMenu";

// TODO get the drawer to work
// TODO switch this to a dynamic list of sections

const Navlist = () => {
  return (
    <nav className="flex justify-center items-center font-trebuchet text-xl">
      <ul className="hidden md:flex flex-row justify-center items-center text-blue-500 lg:gap-8 md:gap-6">
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
      <MobileMenu />
    </nav>
  );
};

export default Navlist;
