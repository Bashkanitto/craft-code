import Image from "next/image";
import { reviewList } from "./Constants";

const Review = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-5 mb-40">
      {reviewList.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-5 border p-5 rounded-2xl h-full sm:h-60"
        >
          <div className="flex items-center gap-5">
            <Image
              width={50}
              height={50}
              src={item.img}
              alt={item.h2}
              className="rounded-full w-10 h-10 object-cover"
            />
            <span>{item.h2}</span>
          </div>
          <p className="text-xs">{item.p}</p>
        </div>
      ))}
    </section>
  );
};

export default Review;
