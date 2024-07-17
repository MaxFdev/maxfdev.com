import React, { ReactNode } from "react";

// TODO set up scrolling effect

// TODO does this need to exist

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
