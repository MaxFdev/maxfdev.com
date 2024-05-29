import Link from "next/link";
import React from "react";

const navlist = () => {
  return (
    <nav className="">
      <ul className="flex flex-row gap-3 font-trebuchet">
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navlist;
