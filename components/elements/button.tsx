import Link from "next/link";
import React, { ReactNode } from "react";

const button = ({
  children,
  href = undefined,
  target = "",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  target?: string;
  className?: string;
}) => {
  if (href !== undefined) {
    return (
      <Link href={href} target={target} className="w-fit">
        <button
          className={`transition-all! cursor-pointer [transition-duration:_300ms_!important;] w-fit border-2 [line-height:_16px;] border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`transition-all! cursor-pointer [transition-duration:_300ms_!important;] w-fit border-2 [line-height:_16px;] border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default button;
