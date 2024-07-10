import React from "react";
import BigButton from "../elements/bigButton";
import { Section, Icon, getIconsData } from "@/utils/icons";
import Image from "next/image";

// TODO finish designing

// TODO style

const skills = () => {
  const iconSections: Section[] = getIconsData();

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16 bg-slate-200"
    >
      <h2>What I Know And Use.</h2>
      <div>
        {/* TODO finish adding skills */}
        {iconSections.map((section, key) => (
          <div key={key}>
            <h4 className="font-bold text-3xl">{section.name}</h4>
            <ul>
              {section.items.map((item, itemKey) => (
                <li key={itemKey}>
                  <figure>
                    <Image height={50} width={50} src={item.path} alt={item.title} />
                    <figcaption>{item.title}</figcaption>
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
