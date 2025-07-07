import React from "react";
import Button from "@/components/elements/button";
import { socials } from "@/data/index";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// TODO finalize styling
// TODO change go to to an icon

const contact = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl p-2">Contact</Button>
      </DialogTrigger>
      <DialogContent className="max-sm:w-96 max-sm:rounded-lg">
        <DialogHeader>
          <DialogTitle asChild>
            <h3>Contact & Socials</h3>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="text-blue-300">Here are all my accounts.</p>
          </DialogDescription>
        </DialogHeader>
        <ul>
          {socials.map((platform, key) => (
            <li
              key={key}
              className="flex justify-between items-center font-semibold w-full border-b-[1px]"
            >
              <div className="flex flex-col justify-center items-start">
                <h4>{platform.title}:</h4>
                <p className="text-blue-500">{platform.user}</p>
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
  );
};

export default contact;
