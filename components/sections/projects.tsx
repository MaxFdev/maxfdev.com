import BigButton from "@/components/elements/bigButton";
import DynamicProjectList from "@/components/elements/dynamicProjectList";

const projects = async () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center gap-(--gap-clamp)"
    >
      <h2 className="text-center">Some Of My Projects.</h2>
      <BigButton
        href="https://github.com/MaxFdev"
        target="_blank"
        className="hover:bg-purple-400"
      >
        View GitHub Profile
      </BigButton>
      <DynamicProjectList
        username={process.env.NEXT_PUBLIC_GITHUB_ACCOUNT || ""}
      />
    </section>
  );
};

export default projects;
