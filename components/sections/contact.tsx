import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "../ui/dialog";

// TODO add styles and content

const contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center"
    >
      <h2 className="text-center">Contact me.</h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <h3>Here are all my details.</h3>
        <Dialog>
          <DialogTrigger>Get details.</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle asChild>
                <h3>Contact & Socials</h3>
              </DialogTitle>
              <DialogDescription asChild>
                <p>Here are all my public accounts.</p>
              </DialogDescription>
            </DialogHeader>
            {/* TODO finish adding socials */}
            <ul>
              <li>email</li>
              <li>linkedin</li>
              <li>website</li>
              <li>something</li>
              <li>etc</li>
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default contact;
