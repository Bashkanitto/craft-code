import Image from "next/image";
import { advantagesList, reviewList } from "./Constants";

const Advantages = () => {
  return (
    <section className="container mx-auto flex flex-col  justify-center items-center text-white text-center gap-10 mb-40">
      <div className="blocks flex flex-col md:flex-row flex-wrap gap-5">
        {advantagesList.map((item) => (
          <div
            className="border border-gray-700 w-full md:w-[400px] p-10 rounded-2xl flex flex-col justify-center items-center"
            key={item.id}
          >
            <Image width={100} height={100} src={item.img} alt={item.h2} />
            <h2>{item.h2}</h2>

            <p>{item.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
