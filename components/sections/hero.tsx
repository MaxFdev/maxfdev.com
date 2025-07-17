import React from "react";
import Image from "next/image";
import Button from "@/components/elements/button";
import { intro } from "@/data/index";

const hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-[var(--gap-clamp)]">
        <Image
          src={"/images/Profile_Picture.jpg"}
          alt={"Profile Picture"}
          width={400}
          height={400}
          priority
          className="w-[60vw] sm:w-[240px] lg:w-[400px] rounded-full shadow-xl hover:shadow-2xl hero_img transitions object-cover"
        />
        <div className="flex flex-col justify-center w-11/12 sm:w-[var(--hero-clamp)] p-4 gap-2 rounded-2xl [box-shadow:_var(--shadow-light)] hover:[box-shadow:_var(--shadow-strong)] transitions">
          <h2 className="!text-3xl lg:!text-4xl font-trebuchet font-semibold">
            Introduction.
          </h2>
          <p className="font-semibold">{intro.text}</p>
          <Button
            href="https://www.linkedin.com/in/max--franklin/"
            target="_blank"
          >
            View My LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default hero;
