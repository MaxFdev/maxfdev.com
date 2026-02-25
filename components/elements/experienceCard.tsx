import Image from "next/image";
import Button from "@/components/elements/button";
import { ExperienceDialogClient } from "@/components/elements/experienceDialogClient";
import { ExperienceMetadata } from "@/data";
import { ArrowUpRight } from "lucide-react";

export function ExperienceCard({ experience }: { experience: ExperienceMetadata }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-blue-300 rounded-lg drop-shadow-md p-4">
      {/* Image Section */}
      <div className="flex w-full aspect-video md:w-72 shrink-0 self-center items-center justify-center">
        <div className="w-fit overflow-hidden rounded-lg drop-shadow-md flex items-center justify-center bg-white">
          {experience.image ? (
            <Image
              src={experience.image}
              alt={experience.company}
              width={960}
              height={540}
              className="w-full h-full object-contain object-center"
            />
          ) : (
            <div className="h-full w-full rounded-lg drop-shadow-md bg-gray-200" />
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col gap-3">
        <div>
          <h3 className="text-2xl font-extrabold font-trebuchet">{experience.role}</h3>
          <p className="text-lg font-semibold">{experience.company}</p>
          <p className="text-sm text-gray-600">{experience.dates}</p>
        </div>

        <p className="text-md flex-1">{experience.overview}</p>

        <div className="flex gap-3 flex-wrap items-center">
          <ExperienceDialogClient experience={experience}>
            <button className="transition-all! cursor-pointer duration-300! w-fit border-2 text-md border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet">
              Learn More
            </button>
          </ExperienceDialogClient>
          {experience.companyUrl && (
            <Button
              className="flex gap-1 items-center"
              href={experience.companyUrl}
              target="_blank"
            >
              Visit Company
              <ArrowUpRight size={20} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
