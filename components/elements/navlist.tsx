import React from "react";
import Link from "next/link";
import Contact from "@/components/elements/contact";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// TODO get the drawer to work
// TODO switch this to a dynamic list of sections
// FIXME make links on click scroll

const navlist = () => {
  return (
    <nav className="flex justify-center items-center font-trebuchet text-xl">
      <ul className="hidden md:flex flex-row justify-center items-center text-blue-500 lg:gap-8 md:gap-6">
        <li>
          <Link href="/#hero">Intro</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#skills">Skills</Link>
        </li>
        <li>
          <Contact />
        </li>
      </ul>
      <div className="md:hidden">
        <Contact />
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="md:hidden text-blue-500 px-5 text-5xl">≡</button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center py-2 border-y-2 text-2xl">
              Menu
            </DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-4 text-center text-blue-500 font-semibold text-2xl py-8 px-20">
            <Link
              className="shadow-md bg-slate-100 hover:shadow-xl rounded py-4"
              href="/#hero"
            >
              Intro
            </Link>
            <Link
              className="shadow-md bg-slate-100 hover:shadow-xl rounded py-4"
              href="/#about"
            >
              About
            </Link>
            <Link
              className="shadow-md bg-slate-100 hover:shadow-xl rounded py-4"
              href="/#projects"
            >
              Projects
            </Link>
            <Link
              className="shadow-md bg-slate-100 hover:shadow-xl rounded py-4"
              href="/#skills"
            >
              Skills
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default navlist;
