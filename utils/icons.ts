import fs from "fs";
import path from "path";

// TODO make sure this works properly

// TODO reorganize file names

// TODO is this file in the right location?

export interface Icon {
  title: string;
  path: string;
}

export interface Section {
  name: string;
  items: Icon[];
}

export const getIconsData = (): Section[] => {
  const publicPath = path.join(process.cwd(), "public", "icons");
  const sections: Section[] = [];

  const sectionNames = fs.readdirSync(publicPath);

  sectionNames.forEach((sectionName) => {
    if (sectionName !== "other") {
      const sectionPath = path.join(publicPath, sectionName);
      if (fs.statSync(sectionPath).isDirectory()) {
        const items: Icon[] = [];
        const itemNames = fs.readdirSync(sectionPath);

        itemNames.forEach((itemName) => {
          const itemPath = path.join(sectionPath, itemName);
          if (fs.statSync(itemPath).isFile()) {
            items.push({
              title: itemName.slice(0, itemName.lastIndexOf(".")),
              path: `/icons/${sectionName}/${itemName}`,
            });
          }
        });

        sections.push({
          name: sectionName,
          items,
        });
      }
    }
  });

  return sections;
};
