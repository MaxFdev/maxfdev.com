import React from "react";
import BigButton from "../elements/bigButton";

// TODO finish

// TODO use Lucide?

const skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16 bg-slate-200"
    >
      <h2>What I Know And Use.</h2>
      <div>
        {/* TODO add skills */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, in
        velit sint eius fugit facere asperiores quas illum eveniet repudiandae
        cum, nisi, natus enim porro! Corrupti unde illum similique dolore?
      </div>
      <BigButton
        href="https://www.linkedin.com/in/max--franklin/"
        target="_blank"
        className="hover:bg-blue-400"
      >
        More Skills - LinkedIn
      </BigButton>
    </section>
  );
};

export default skills;
