import React from "react";
import Contact from "@/components/elements/contact";
import Navbar from "./navbar";
import Name from "./name";

const Header = () => {
  return (
    <header
      id="header"
      className="h-16 mb-8"
    >
      <Navbar>
        <Name />
        <Contact />
      </Navbar>
    </header>
  );
};

export default Header;
