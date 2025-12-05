import React from "react";
import Image from "next/image";
import Button from "@/components/elements/button";

// TODO finish styling
// TODO add click to expand feature (use dialog box)

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
    <div className="flex flex-col gap-2 p-1">
      <div className="w-full aspect-video overflow-hidden rounded-lg drop-shadow-md">
        {img ? (
          <Image
            src={img}
            alt={title}
            width={960}
            height={540}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="h-full w-full rounded-lg drop-shadow-md bg-gray-200" />
        )}
      </div>
      <div
        className="flex flex-col rounded-lg p-3 drop-shadow-md gap-2 h-[520px]"
        style={{ backgroundColor: `${color}` }}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        {/* TODO Fix the scrolling */}
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
        <p className="text-md line-clamp-[14]">{content}</p>
        <div className="mt-auto">
          <Button href={link} target="_blank">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default project;
