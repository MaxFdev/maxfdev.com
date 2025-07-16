"use client";

import Link from "next/link";

const Name = () => {
  return (
    <Link
      href="/#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <h1 className="font-verdana text-blue-500 font-semibold text-3xl [text-shadow:_1px_1px_0px_#000000ab]">
        Max Franklin
      </h1>
    </Link>
  );
};

export default Name;
