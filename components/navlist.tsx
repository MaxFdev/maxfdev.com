import React from "react";

const navlist = () => {
  return (
    <nav className="">
      <ul className="flex flex-row gap-3 font-trebuchet">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default navlist;
