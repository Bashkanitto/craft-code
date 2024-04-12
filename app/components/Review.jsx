import Image from "next/image";
import { reviewList } from "./Constants";

const Review = () => {
  return (
    <section className="container mx-auto flex flex-col  justify-center items-center text-white text-center gap-5 mb-40">
      <p className=" text-green">Отзывы</p>
      <h2 className="mb-5">Каждый отзыв - это история успеха</h2>
      <div className="blocks flex flex-col md:flex-row flex-wrap gap-2">
        {reviewList.map((item) => (
          <div
            className="border border-gray-700 flex-wrap p-10 rounded-2xl flex flex-col justify-center items-center"
            key={item.id}
          >
            <div className="flex gap-4 items-center">
              <Image
                width={20}
                height={20}
                src={item.img}
                alt={item.h2}
                className="rounded-full w-full"
              />
              <h2>{item.h2}</h2>
            </div>
            <p>{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
