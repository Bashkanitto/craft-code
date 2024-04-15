import React from "react";
import { requestList } from "./Constants";
import Image from "next/image";

const Request = () => {
  return (
    <section className="container mx-auto h-[80vh]">
      <h2 className="text-center mb-20">Процесс Подачи заявки на Обучение</h2>
      <div className="flex gap-10 flex-wrap">
        {requestList.map((item) => (
          <div
            key={item.id}
            className="flex w-full sm:w-[160px] mx-auto flex-col gap-5 text-center items-center"
          >
            <Image
              width={100}
              height={100}
              className="w-40"
              src={item.img}
              alt={item.h3}
            />
            <h3>{item.h3}</h3>
            <p className="text-xs w-1/2 sm:w-full">{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Request;
