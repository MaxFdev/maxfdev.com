import React from "react";
import Image from "next/image";
import Button from "./button";

// TODO finish styling

const project = ({
  img,
  title,
  content,
  tags = [],
  link,
}: {
  img: string;
  title: string;
  content: string;
  tags: string[];
  link: string;
}) => {
  return (
    // TODO make shadows interactive
    <div className="flex flex-col h-fit gap-2">
      <Image
        src={img}
        alt={title}
        width={1920}
        height={1080}
        className="rounded-lg shadow-md"
      />
      <div className="bg-green-50 rounded-lg p-4 shadow-md">
        <h3>{title}</h3>
        <p>{content}</p>
        <ul>
          {tags.map((tag, key) => (
            <li key={key}>{tag}</li>
          ))}
        </ul>
        <Button href={link}>View Project</Button>
      </div>
    </div>
  );
};

export default project;
