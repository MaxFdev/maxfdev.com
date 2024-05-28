import React from "react";
import Navlist from "./navlist";

const header = () => {
  return (
    <header className="fixed bg-white top-0 left-0 w-full h-10 p-5 flex justify-between items-center">
      <a href="#">
        <h1>Max Franklin</h1>
      </a>
      <Navlist />
    </header>
  );
};

export default header;
