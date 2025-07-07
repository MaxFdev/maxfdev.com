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
    <div className="flex flex-col gap-2 p-1">
      {img ? (
        <div className="h-[200px] w-full overflow-hidden rounded-lg drop-shadow-md">
          <Image
            src={img}
            alt={title}
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="w-full h-[200px] rounded-lg drop-shadow-md bg-gray-200 animate-pulse" />
      )}
      <div
        className="flex flex-col rounded-lg p-3 drop-shadow-md gap-2 h-[50vh]"
        style={{ backgroundColor: `${color}` }}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="mt-4 flex gap-1 overflow-x-scroll h-12">
          <h4 className="font-semibold font-mono text-xl">Tags:</h4>
          {tags.map((tag, key) => (
            <span
              key={key}
              className="p-1 h-fit rounded-3xl border-2 border-black text-sm font-bold whitespace-nowrap text-center uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-md line-clamp-[12]">{content}</p>
        <div className="mt-auto">
          <Button
            href={link}
            target="_blank"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default project;
