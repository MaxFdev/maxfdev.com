import React, { ReactNode } from "react";

const button = ({
  children,
  href,
  target,
}: {
  children: ReactNode;
  href: string;
  target?: string;
}) => {
  return (
    <button className="w-fit">
      <a
        href={href}
        target={target}
        className="border-2 border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black"
      >
        {children}
      </a>
    </button>
  );
};

export default button;
