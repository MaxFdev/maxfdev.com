import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutItems } from "@/data";
import BigButton from "@/components/elements/bigButton";

// TODO finish styling

const about = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 py-16 gap-16 bg-slate-200"
    >
      <h2 className="text-center">What am I up to?</h2>
      <Tabs
        defaultValue={aboutItems[0].title}
        className="w-4/5 flex flex-col justify-center items-center"
      >
        <TabsList className="h-fit w-full justify-evenly gap-1 bg-slate-700">
          {aboutItems.map((item, i) => (
            <TabsTrigger
              value={item.title}
              key={i}
              className="text-slate-300 data-[state=active]:text-white text-center text-2xl data-[state=active]:bg-black hover:bg-slate-800"
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
          >
            <div className="bg-black rounded-md p-6">
              <p className="text-white">{item.content}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <BigButton href="https://www.linkedin.com/in/max--franklin/" target="_blank">More about - LinkedIn</BigButton>
    </section>
  );
};

export default about;
