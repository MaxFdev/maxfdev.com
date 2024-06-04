import React from "react";
import Image from "next/image";

const hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center scroll-mt-20 my-36"
    >
      <div className="flex justify-center items-center gap-[var(--gap-clamp)]">
        {/* TODO switch to directionally aware image */}
        <Image
          src={"/images/Profile_Picture.jpeg"}
          alt={"Profile Picture"}
          width={400}
          height={400}
          className="rounded-full shadow-xl hover:shadow-2xl hero_img"
        />
        <div className="flex flex-col justify-center w-[clamp(500px,_50vw,_600px)] p-4 gap-2 rounded-2xl [box-shadow:_var(--shadow-light)] hover:[box-shadow:_var(--shadow-strong)]">
          {/* TODO switch to text generate */}
          <h2 className="text-4xl font-trebuchet font-semibold">
            Introduction.
          </h2>
          <p className="font-semibold font-noto">
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
          {/* TODO switch to button component */}
          <button className="w-fit">
            <a
              target="_blank"
              href="/documents/DemoResumeJune.pdf"
              className="border-2 border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black"
            >
              View Sample Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default hero;
