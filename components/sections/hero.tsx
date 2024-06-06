import React from "react";
import Image from "next/image";
import Button from "@/components/elements/button";

const hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center scroll-mt-20 my-20 lg:my-36"
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[var(--gap-clamp)]">
        <Image
          src={"/images/Profile_Picture.jpeg"}
          alt={"Profile Picture"}
          width={400}
          height={400}
          className="w-[55vw] sm:w-[350px] lg:w-[400px] rounded-full shadow-xl hover:shadow-2xl hero_img"
        />
        <div className="flex flex-col justify-center w-11/12 md:w-[clamp(500px,_50vw,_600px)] p-4 gap-2 rounded-2xl [box-shadow:_var(--shadow-light)] hover:[box-shadow:_var(--shadow-strong)]">
          <h2 className="!text-4xl font-trebuchet font-semibold">
            Introduction.
          </h2>
          <p className="font-semibold">
            Hello, I&apos;m Max, a dedicated technology enthusiast currently
            pursuing a Bachelor&apos;s degree in computer science at Yeshiva
            University. With a deep passion for technology, I have immersed
            myself in the field to become a well-rounded professional. I
            successfully run two freelance businesses: one focused on IT
            consulting and the other on web design and development. Despite
            being in the early stages of my career, I have already completed
            exciting projects, including the development of this website, which
            serves as a testament to my capabilities. Alongside my technical
            experience, I have strong programming skills, primarily in Java.
            While continually expanding my knowledge, I am particularly
            intrigued by fintech, cybersecurity, and full stack engineering. I
            am actively pursuing further education in these domains.
          </p>
          <Button
            href="/documents/DemoResumeJune.pdf"
            target="_blank"
            className=""
          >
            View Sample Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default hero;
