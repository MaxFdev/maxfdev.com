import React from "react";
import Image from "next/image";

// TODO finish styling

const hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center scroll-mt-16 my-20"
    >
      <div className="flex justify-evenly w-4/5">
        {/* TODO fix background || merge image with background */}
        <Image
          src={"/images/Profile_Picture.jpeg"}
          alt={"Profile Picture"}
          width={400}
          height={400}
          className="bg-sky-600 rounded-full"
        />
        <div className="flex flex-col w-1/2 justify-center gap-3">
          <h2 className="text-4xl font-trebuchet">Introduction.</h2>
          {/* TODO add text */}
          <p className="font-semibold font-noto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt culpa
            optio deserunt voluptate non repellat, pariatur ipsam quasi
            exercitationem temporibus cum quidem natus illum id! Recusandae
            error ut laborum molestias.
          </p>
          {/* TODO add functional button */}
          <button>View Sample Resume</button>
        </div>
      </div>
    </section>
  );
};

export default hero;
