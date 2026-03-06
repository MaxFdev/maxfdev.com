import { getExperienceMetadata } from "@/data";
import { ExperienceCard } from "@/components/elements/experienceCard";

const Experience = () => {
  const experienceList = getExperienceMetadata();

  return (
    <section
      id="experience"
      className="flex flex-col justify-center items-center gap-(--gap-clamp)"
    >
      <h2 className="text-center">Work Experience.</h2>

      <div className="flex flex-col gap-6 w-11/12 max-w-sm md:max-w-(--width-clamp)">
        {experienceList.map((experience) => (
          <ExperienceCard key={experience.slug} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
