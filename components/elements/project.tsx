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
    <div className="w-[300px] h-fit bg-green-50">
      <Image
        src={img}
        alt={title}
        // TODO set proper width and height
        width={1920}
        height={1080}
      />
      <div>
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
