import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { aboutItems } from "@/data";

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
        <TabsList className="h-fit w-full justify-evenly">
          {aboutItems.map((item, i) => (
            <TabsTrigger
              value={item.title}
              key={i}
              className={`text-center text-2xl w-1/${aboutItems.length}`}
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
            <div className="bg-white rounded-md p-6 h-56">
              <p className="">{item.content}</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
      <button>More about - LinkedIn</button>
    </section>
  );
};

export default about;
