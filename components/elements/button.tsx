import Link from "next/link";
import React, { ReactNode } from "react";

const button = ({
  children,
  href,
  target = "",
  className = "",
}: {
  children: ReactNode;
  href: string;
  target?: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      target={target}
      className="w-fit"
    >
      <button
        className={`!transition-all w-fit border-2 border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default button;
