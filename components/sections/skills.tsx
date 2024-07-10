import React from "react";
import BigButton from "../elements/bigButton";
import { Section, Icon, getIconsData } from "@/utils/icons";
import Image from "next/image";

// TODO finish designing

// TODO fix and finish all style

const skills = () => {
  const iconSections: Section[] = getIconsData();

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16 bg-slate-200"
    >
      <h2>What I Know And Use.</h2>
      <div className="flex flex-col lg:flex-row gap-2">
        {iconSections.map((section, key) => (
          <div key={key} className="flex flex-col bg-green-100 rounded h-fit p-4 items-center">
            <h3 className="font-bold text-2xl">{section.name}</h3>
            <ul className="grid grid-cols-3 gap-1">
              {section.items.map((item, itemKey) => (
                <li key={itemKey}>
                  <figure className="w-20 p-1 flex flex-col items-center bg-slate-50 rounded">
                    <Image height={50} width={50} src={item.path} alt={item.title} />
                    <figcaption className="text-sm">{item.title}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <BigButton
        href="https://www.linkedin.com/in/max--franklin/"
        target="_blank"
        className="hover:bg-blue-400"
      >
        More Skills - LinkedIn
      </BigButton>
    </section>
  );
};

export default skills;
