"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Name = () => {
  const pathname = usePathname();

  return (
    <Link
      href="/"
      onClick={(e) => {
        if (pathname === "/") {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
    >
      <h1 className="font-verdana text-blue-500 font-semibold text-3xl [text-shadow:_1px_1px_0px_#000000ab]">
        Max Franklin
      </h1>
    </Link>
  );
};

export default Name;
