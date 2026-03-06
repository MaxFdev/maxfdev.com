import Link from "next/link";
import { ReactNode } from "react";

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
          className={`flex items-center gap-2 transition-all! cursor-pointer duration-300! w-fit border-2 text-md border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`flex items-center gap-2 transition-all! cursor-pointer duration-300 w-fit border-2 text-md border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default button;
