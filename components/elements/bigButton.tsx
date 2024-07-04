import Link from "next/link";
import React, { ReactNode } from "react";

const bigButton = ({
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
    >
      <button
        className={`w-fit p-4 rounded border-2 border-black bg-black text-white font-trebuchet font-semibold text-2xl hover:scale-110 ${className}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default bigButton;
