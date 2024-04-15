import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="container h-[80vh] flex flex-col justify-center"
    >
      <h2 className="text-center mb-5">О Нас</h2>
      <div className=" flex flex-col md:flex-row gap-10 justify-center items-center h-60">
        <p className="text-xs text-center md:text-start overflow-scroll h-full">
          CraftCode - школа программирования, основанная в начале 2023 года
          профессионалами с опытом более 7 лет в крупных IT-проектах, таких как
          Kaspi, Сергек, Алматы бизнес, Freedom bank, DAR. Мы предлагаем
          комплексные и продвинутые курсы для тех, кто стремится начать карьеру
          в IT. Наши опытные наставники гарантируют индивидуальный подход к
          каждому студенту. Одной из наших ключевых особенностей является помощь
          в трудоустройстве и предоставление контрактных проектов для успешных
          студентов в сфере высоких технологий.
        </p>
        <Image
          width={500}
          height={500}
          className="w-1/2 h-full"
          src="/images/illustration-about.png"
          alt="about-us-images"
        />
      </div>
    </section>
  );
};

export default About;
