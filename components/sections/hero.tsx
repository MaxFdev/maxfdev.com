import React from "react";
import Image from "next/image";
import Button from "@/components/elements/button";
import { intro } from "@/data/index";

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
          className="w-[55vw] sm:w-[350px] lg:w-[400px] rounded-full shadow-xl hover:shadow-2xl hero_img transitions"
        />
        <div className="flex flex-col justify-center w-11/12 md:w-[var(--width-clamp)] lg:w-[var(--hero-clamp)] p-4 gap-2 rounded-2xl [box-shadow:_var(--shadow-light)] hover:[box-shadow:_var(--shadow-strong)] transitions">
          <h2 className="!text-4xl font-trebuchet font-semibold">
            Introduction.
          </h2>
          <p className="font-semibold">
            {intro.text}
            
          </p>
          <Button
            href="/documents/DemoResume.pdf"
            target="_blank"
          >
            View Sample Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default hero;
