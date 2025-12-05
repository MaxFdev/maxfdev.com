import React from "react";

const Footer = () => {
  // Format the date for display
  const formatDate = () => {
    if (!process.env.LAST_UPDATED) return "Recently";

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(process.env.LAST_UPDATED).toLocaleDateString(
      undefined,
      options
    );
  };

  return (
    <footer id="footer" className="flex justify-center items-center mt-20">
      <div className="border-dashed border-t border-t-gray-500 p-1">
        <p className="max-sm:text-xs">
          I designed and developed this site | Updated {formatDate()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
