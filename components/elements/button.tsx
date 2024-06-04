import React, { ReactNode } from "react";

const button = ({ children }: { children: ReactNode }) => {
  return <button className="border-2 border-black bg-black">{children}</button>;
};

export default button;
