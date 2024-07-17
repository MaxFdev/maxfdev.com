import React from "react";
import Image from "next/image";
import BigButton from "../elements/bigButton";
import { Section, getIconsData } from "@/utils/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

// TODO finalize styling

// TODO make more interactive

const skills = () => {
  const iconSections: Section[] = getIconsData();

  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16 bg-slate-200"
    >
      <h2 className="text-center">What I Know And Use.</h2>
      <Accordion
        type="single"
        defaultValue="item-0"
        className="bg-indigo-400 rounded-lg p-2 shadow-xl"
      >
        {iconSections.map((section, key) => (
          <AccordionItem
            key={key}
            value={"item-" + key}
            className="border-b-[1px] border-black"
          >
            <AccordionTrigger>
              <h3 className="font-bold text-2xl text-black">{section.name}</h3>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1">
                {section.items.map((item, itemKey) => (
                  <li key={itemKey}>
                    <figure className="p-1 w-20 h-20 flex flex-col justify-center items-center rounded">
                      <Image
                        height={50}
                        width={50}
                        src={item.path}
                        alt={item.title}
                      />
                      <figcaption className="text-xs font-semibold text-center">
                        {item.title}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
