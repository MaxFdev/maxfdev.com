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
    <button>
      <a href={href} target={target}>{children}</a>
    </button>
  );
};

export default bigButton;
