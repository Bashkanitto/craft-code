"use client";
import React, { useState } from "react";
import { ITtools, adroid, coursesList, python } from "./Constants";
import Image from "next/image";

let index = 0;
const Courses = () => {
  const massive = [adroid, python, ITtools];
  const [isOpen, setIsOpen] = useState();

  function openModal(id, event) {
    event.stopPropagation();
    index = id - 1;
    setIsOpen(!isOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <section
      onClick={closeModal}
      id="courses"
      className="relative p-4 mx-auto h-[100vh] flex flex-col justify-center"
    >
      <h2 className="text-center mb-20">Курсы</h2>
      <div className="flex gap-5 justify-center flex-wrap sm:flex-nowrap">
        {coursesList.map((item) => (
          <button
            onClick={(event) => openModal(item.id, event)}
            key={item.id}
            className="flex h-[375px] overflow-hidden border rounded-2xl w-full sm:w-[300px] flex-col gap-5 text-center items-center"
          >
            <div className="hover:-translate-y-[400px] duration-500">
              <div className="flex sm:flex-col items-center gap-5 sm:gap-4">
                <Image
                  width={100}
                  height={100}
                  className="w-20 md:w-40"
                  src={item.img}
                  alt={item.h3}
                />
                <h3>{item.h3}</h3>
              </div>
              <p className="text-xs w-full sm:w-full mb-40">{item.p}</p>
              <div className="bg-green p-2 min-h-[375px] flex flex-col justify-center">
                <p className="">
                  <span className="text-white">Формат: </span>
                  {item.format}
                </p>
                <p>
                  <span className="text-white">Длительность: </span>
                  {item.duration}
                </p>
                <h4 className="text-xl pb-40">{item.price}</h4>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Courses;
