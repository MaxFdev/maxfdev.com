import React from "react";
import Image from "next/image";
import Button from "./button";

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
    <div className="w-[300px] h-[400px] bg-green-50">
      <Image
        src={img}
        alt={title}
      />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <ul>
          {tags.map((i, j) => (
            <li key={j}>{i}</li>
          ))}
        </ul>
        <Button href={link}>View Project</Button>
      </div>
    </div>
  );
};

export default project;
