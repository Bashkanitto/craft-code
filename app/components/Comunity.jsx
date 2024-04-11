import React from "react";
import { comunityList } from "./Constants";
import Image from "next/image";

const Comunity = () => {
  return (
    <section className="container mx-auto mb-40">
      <div className="flex flex-col items-center text-center w-1/2 mx-auto mb-10 gap-5">
        <h2>Built by the Community for the Community</h2>
        <p>Harum quae dolore orrupti aut temporibus ariatur.</p>
      </div>
      <div className="flex flex-wrap justify-center w-1/2 mx-auto gap-2">
        {comunityList.map((item, index) => (
          <Image
            width={300}
            height={300}
            className="rounded-full w-[80px] h-[300px] object-cover hover:w-[200px] hover:opacity-20 after:content-['Hovering'] hover:h-[300px] transition-all duration-500"
            key={index}
            src={item}
            alt={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Comunity;
