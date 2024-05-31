"use client";

import React, { ReactNode } from "react";

const scrolling = () => {
    // TODO Get the scroll event listener work
  //   const header = document.querySelector("header");
  alert("we are scrolling");
};

const body = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <body
      className={className}
      onSeeking={scrolling}
    >
      {children}
    </body>
  );
};

export default body;
