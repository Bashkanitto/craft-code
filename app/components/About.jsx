import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="container mb-40 rounded-2xl">
      <h2 className="text-center">О нас</h2>
      <div className=" flex justify-center items-center">
        <p>
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
          src="/images/illustration-about.png"
          alt="about-us-images"
        />
      </div>
    </section>
  );
};

export default About;
