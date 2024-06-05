import React, { ReactNode } from "react";

// TODO finish styling

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
    <button className={`w-fit p-4 rounded border-2 border-black bg-black text-white font-trebuchet font-semibold text-2xl hover:scale-110 ${className}`}>
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
