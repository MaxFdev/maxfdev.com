import React from "react";
import { aboutItems } from "@/data";
import BigButton from "@/components/elements/bigButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// TODO maybe add pictures or graphics to each tab?
// FIXME make tabs fixed height

const about = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16 bg-slate-200"
    >
      <h2 className="text-center">What am I up to?</h2>
      <Tabs
        defaultValue={aboutItems[0].title}
        className="w-11/12 md:w-[var(--width-clamp)] flex flex-col justify-center items-center"
      >
        <TabsList className="h-fit w-full justify-evenly gap-1 bg-teal-400 shadow-xl">
          {aboutItems.map((item, i) => (
            <TabsTrigger
              value={item.title}
              key={i}
              className="text-black data-[state=active]:text-white text-center text-2xl data-[state=active]:bg-black data-[state=active]:shadow-sm hover:bg-teal-500 hover:scale-95 [transition-duration:_300ms_!important;]"
              style={{ width: `${Math.floor(100 / aboutItems.length)}%` }}
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {aboutItems.map((item, i) => (
          <TabsContent
            value={item.title}
            key={i}
            className="shadow-xl bg-teal-400 rounded-md p-6 w-full"
          >
            <p className="text-black">{item.content}</p>
          </TabsContent>
        ))}
      </Tabs>
      <BigButton
        href="https://www.linkedin.com/in/max--franklin/"
        target="_blank"
        className="hover:bg-blue-400"
      >
        More about - LinkedIn
      </BigButton>
    </section>
  );
};

export default about;
