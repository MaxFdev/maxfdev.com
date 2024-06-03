import React from "react";

const about = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-16 my-20 bg-slate-200"
    >
      <h2 className="text-center">about</h2>
      <div className="flex flex-row w-4/5">
        <div className="flex flex-col">
          <h3>hello</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            dolore reprehenderit. Aliquam exercitationem autem accusantium fuga
            magnam, maxime ut facere commodi. Ab non ad fuga id cum nemo quod
            alias!
          </p>
        </div>
        <div className="flex flex-col">
          <h3>world</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
            nobis? Unde esse id cumque rerum ipsum cum minima saepe excepturi?
            Soluta, nemo. Dignissimos, dicta sed est quisquam consequuntur
            asperiores aperiam.
          </p>
        </div>
      </div>
      <button>More about - LinkedIn</button>
    </section>
  );
};

export default about;
