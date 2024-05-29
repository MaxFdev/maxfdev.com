import React from "react";
import Navlist from "./navlist";
import Link from "next/link";

const header = () => {
  return (
    <header className="fixed bg-white top-0 left-0 w-full h-10 p-5 flex justify-between items-center border-b">
      <Link href="#">
        <h1 className="font-verdana">Max Franklin</h1>
      </Link>
      <Navlist />
    </header>
  );
};

export default header;
