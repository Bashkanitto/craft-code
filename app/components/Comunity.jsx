import React from "react";
import { comunityList } from "./Constants";
import Image from "next/image";

const Comunity = () => {
  return (
    <section id="comunity" className="container mx-auto mb-40">
      <div className="flex flex-col items-center text-center w-full md:w-1/2 mx-auto mb-10 gap-5">
        <p className=" text-green">Команда</p>
        <h2>Вдохновленная Команда, Готовая Привести Вас к Успеху!</h2>
      </div>
      <div className="flex flex-wrap justify-center w-full mx-auto gap-2">
        {comunityList.map((item) => (
          <div key={item.id} className=" cards group relative">
            <Image
              width={300}
              height={300}
              className="rounded-full w-[80px] h-[80px] sm:h-[300px]  object-cover group-hover:w-[200px] group-hover:opacity-20 duration-500"
              src={item.img}
              alt={item}
            />
            <div className="absolute inset-y-10 inset-x-10 opacity-0 group-hover:opacity-100 duration-150 scale-100 transform overflow-hidden group-hover:scale-100">
              <span className="text-white text-lg">{item.name}</span>
              <span className="text-xs">{item.p}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comunity;
