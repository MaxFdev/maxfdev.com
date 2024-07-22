import Link from "next/link";
import React from "react";

// TODO mobile nav
// TODO switch this to a dynamic list of sections
// TODO make links on click scroll
// TODO make contact bring up contact menu

const navlist = () => {
  return (
    <nav className="font-trebuchet text-blue-500 text-xl">
      <ul className="hidden md:flex flex-row lg:gap-8 md:gap-6">
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
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
      <button className="md:hidden">≡</button>
    </nav>
  );
};

export default navlist;
