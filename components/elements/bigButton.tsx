import React, { ReactNode } from "react";

const bigButton = ({
  children,
  href,
  target = "",
}: {
  children: ReactNode;
  href: string;
  target?: string;
}) => {
  return (
    <button className="w-fit p-4 rounded border-1 bg-black text-white font-trebuchet font-semibold text-2xl hover:scale-110">
      <a
        href={href}
        target={target}
      >
        {children}
      </a>
    </button>
  );
};

export default bigButton;
