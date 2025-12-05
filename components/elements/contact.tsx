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
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl p-2">Contact</Button>
      </DialogTrigger>
      <DialogContent className="max-sm:w-96 max-sm:rounded-lg">
        <DialogHeader>
          <DialogTitle asChild>
            <h3>Contact me</h3>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="text-blue-300">Here are my accounts.</p>
          </DialogDescription>
        </DialogHeader>
        <ul className="flex flex-col gap-1">
          {socials.map((platform, key) => (
            <li
              key={key}
              className="flex justify-between items-center font-semibold w-full border-b-[1px]"
            >
              <div className="flex justify-center gap-1">
                {platform.icon && (
                  <platform.icon
                    size={28}
                    className="border border-black rounded-full p-1 overflow-visible"
                  />
                )}
                <h4>{platform.title}:</h4>
                <span className="text-blue-500">{platform.user}</span>
              </div>
              <div className="p-1">
                <Button
                  href={platform.link}
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  Go To
                  <ArrowUpRight size={20} />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default Contact;
