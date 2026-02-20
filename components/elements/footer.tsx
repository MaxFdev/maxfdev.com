const Footer = () => {
  // Format the date for display with user's timezone, never showing future dates
  const formatDate = () => {
    if (!process.env.LAST_UPDATED) return "Recently";

    try {
      // Parse the date and convert to user's local timezone
      const commitDate = new Date(process.env.LAST_UPDATED);
      const today = new Date();

      // If the commit date is in the future, display today instead
      if (commitDate > today) {
        return today.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      }

      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      return commitDate.toLocaleDateString(undefined, options);
    } catch {
      return "Recently";
    }
  };

  return (
    <footer
      id="footer"
      className="flex justify-center items-center mt-10 md:mt-20"
    >
      <div className="border-dashed border-t border-t-gray-500 p-1">
        <p className="max-sm:text-xs">
          I designed and developed this site | Updated {formatDate()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
