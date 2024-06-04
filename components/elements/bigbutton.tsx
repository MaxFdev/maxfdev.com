import React, { ReactNode } from "react";

const bigButton = ({ children }: { children: ReactNode }) => {
  return <button>{children}</button>;
};

export default bigButton;
