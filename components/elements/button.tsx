import React, { ReactNode } from "react";

const button = ({
  children,
  href,
  target = "",
}: {
  children: ReactNode;
  href: string;
  target?: string;
}) => {
  return (
    <button className="!transition-all w-fit border-2 border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet">
      <a
        href={href}
        target={target}
      >
        {children}
      </a>
    </button>
  );
};

export default button;
