import React from "react";
import Link from "next/link";
import Contact from "@/components/elements/contact";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// TODO get the drawer to work
// TODO move the contact button outside the drawer on mobile
// TODO switch this to a dynamic list of sections
// FIXME make links on click scroll

const navlist = () => {
  return (
    <nav className="font-trebuchet text-xl">
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
      <Drawer>
        <DrawerTrigger asChild>
          <button className="md:hidden text-blue-500">≡</button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">Menu</DrawerTitle>
          </DrawerHeader>
          <ul className="gap-6 text-center text-blue-500">
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
          <DrawerClose>
            <button className="md:hidden">×</button>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default navlist;
