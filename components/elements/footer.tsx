import Link from "next/link";
import React from "react";
import { lastUpdated } from "@/utils/updated";

// TODO add message and look into auto updating message

const footer = () => {
  return (
    <footer
      id="footer"
      className="flex justify-center items-center mt-20"
    >
      <div className="border-dashed border-t-[1px] border-t-gray-500 p-1">
        <p className="max-sm:text-xs">
          I designed and coded this site | Icons from{" "}
          <Link
            href="https://icons8.com"
            target="_blank"
            className="text-blue-500"
          >
            icons8
          </Link>
          | Updated {lastUpdated()}
        </p>
      </div>
    </footer>
  );
};

export default footer;
