import Image from "next/image";
import Button from "@/components/elements/button";

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
      <div className="bg-blue-300 flex flex-col rounded-lg p-3 drop-shadow-md gap-4 min-h-130 overflow-hidden">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag, key) => (
            <span
              key={key}
              className="p-1 h-fit rounded-3xl border-2 border-black text-sm font-bold whitespace-nowrap text-center uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-md">{content}</p>
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
