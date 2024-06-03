import React from "react";
import Image from "next/image";

// TODO finish styling

const hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center scroll-mt-16 my-20"
    >
      <div className="flex justify-center items-center gap-[var(--gap-clamp)]">
        {/* TODO fix background || merge image with background */}
        <Image
          src={"/images/Profile_Picture.jpeg"}
          alt={"Profile Picture"}
          width={400}
          height={400}
          className="rounded-full shadow-xl"
        />
        <div className="flex flex-col w-1/2 justify-center gap-3">
          <h2 className="text-4xl font-trebuchet">Introduction.</h2>
          {/* TODO add text */}
          <p className="font-semibold font-noto">
            Hello, I'm Max, a dedicated technology enthusiast currently pursuing
            a Bachelor's degree in computer science at Yeshiva University. With
            a deep passion for technology, I have immersed myself in the field
            to become a well-rounded professional. I successfully run two
            freelance businesses: one focused on IT consulting and the other on
            web design and development. Despite being in the early stages of my
            career, I have already completed exciting projects, including the
            development of this website, which serves as a testament to my
            capabilities. Alongside my technical experience, I have strong
            programming skills, primarily in Java. While continually expanding
            my knowledge, I am particularly intrigued by fintech, cybersecurity,
            and full stack engineering. I am actively pursuing further education
            in these domains.
          </p>
          {/* TODO add functional button */}
          <button className="w-fit">View Sample Resume</button>
        </div>
      </div>
    </section>
  );
};

export default hero;
