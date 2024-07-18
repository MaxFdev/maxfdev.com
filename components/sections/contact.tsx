import React from "react";
import { socials } from "@/data/index";
import Button from "../elements/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// TODO finish styling

// TODO maybe make this button accessible from anywhere

const contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16"
    >
      <h2 className="text-center">Contact me.</h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <Dialog>
          <DialogTrigger className="!transition-all w-fit border-2 border-black rounded-lg p-1 bg-black text-white font-semibold hover:bg-transparent hover:text-black font-trebuchet">
            Click to view details.
          </DialogTrigger>
          <DialogContent className="max-sm:w-96 max-sm:rounded-lg">
            <DialogHeader>
              <DialogTitle asChild>
                <h3>Contact & Socials</h3>
              </DialogTitle>
              <DialogDescription asChild>
                <p>Here are all my public accounts.</p>
              </DialogDescription>
            </DialogHeader>
            <ul>
              {socials.map((platform, key) => (
                <li
                  key={key}
                  className="flex justify-between items-center font-semibold w-full border-b-[1px]"
                >
                  <div>
                    {platform.title}:<br /> {platform.user}
                  </div>
                  <Button
                    href={platform.link}
                    target="_blank"
                  >
                    Go To
                  </Button>
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default contact;
