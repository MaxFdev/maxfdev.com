import React, { ReactNode } from "react";

// TODO set up scrolling effect

const body = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <body className={className}>{children}</body>;
};

export default body;
