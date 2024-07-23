import React from "react";
import Image from "next/image";
import Button from "@/components/elements/button";

// TODO finish styling

const project = ({
  img,
  color,
  title,
  content,
  tags = [],
  link,
}: {
  img: string;
  color: string;
  title: string;
  content: string;
  tags: string[];
  link: string;
}) => {
  return (
    // TODO make shadows interactive
    <div className="flex flex-col gap-2">
      <Image
        src={img}
        alt={title}
        width={1920}
        height={1080}
        className="rounded-lg shadow-md"
      />
      <div
        className="flex flex-col rounded-lg p-3 shadow-md gap-2"
        style={{ backgroundColor: `${color}` }}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-md">{content}</p>
        <ul className="flex flex-wrap gap-1">
          <h4 className="font-semibold font-mono text-xl">Tags:</h4>
          {tags.map((tag, key) => (
            <li
              key={key}
              className="p-1 rounded-3xl border-2 border-black text-sm font-bold"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Button
          href={link}
          className="mt-2"
        >
          View Project
        </Button>
      </div>
    </div>
  );
};

export default project;
