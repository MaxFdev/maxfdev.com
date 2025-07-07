import fs from "fs";
import path from "path";

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
              title: itemName
                .slice(0, itemName.lastIndexOf("."))
                .replaceAll("-", " ")
                .toUpperCase(),
              path: `/icons/${sectionName}/${itemName}`,
            });
          }
        });

        sections.push({
          name: sectionName
            .slice(sectionName.indexOf("-") + 1, sectionName.length)
            .replaceAll("-", " ")
            .toUpperCase(),
          items,
        });
      }
    }
  });

  return sections;
};
