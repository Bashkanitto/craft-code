import React from "react";
import { advantagesList } from "./Constants";
import Image from "next/image";

const Advantages = () => {
  return (
    <section
      id="courses"
      className="p-4 mx-auto h-[100vh] flex flex-col justify-center"
    >
      <h2 className="text-center mb-20">Курсы</h2>
      <div className="flex gap-5 justify-center flex-wrap sm:flex-nowrap">
        {advantagesList.map((item) => (
          <div
            key={item.id}
            className="flex border p-5 rounded-2xl w-full sm:w-[300px] flex-col gap-5 text-center items-center"
          >
            <div className="flex sm:block items-center gap-5 sm:gap-0">
              <Image
                width={100}
                height={100}
                className="w-20 md:w-40"
                src={item.img}
                alt={item.h3}
              />
              <h3>{item.h3}</h3>
            </div>
            <p className="text-xs w-full sm:w-full">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
